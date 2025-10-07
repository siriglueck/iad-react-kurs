import express from 'express'
import cors from 'cors'
import { PrismaClient } from './prisma/index.js'

const app = express()
const port = process.env.PORT || 3000
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

// Generate random key for lists and submissions
function generateKey() {
  return Math.random().toString(36).slice(2, 8);
}

app.get('/', (req, res) => {
  res.json({ message: 'liste.live API' })
})

// Create a new list
app.post('/api/lists', async (req, res) => {
  try {
    const { title, description, email } = req.body

    if (!title || !email) {
      return res.status(400).json({ error: 'Title and email are required' })
    }

    // Generate unique key
    let key
    let attempts = 0
    do {
      key = generateKey()
      const existing = await prisma.list.findUnique({ where: { key } })
      if (!existing) break
      attempts++
    } while (attempts < 10)

    if (attempts >= 10) {
      return res.status(500).json({ error: 'Failed to generate unique key' })
    }

    const list = await prisma.list.create({
      data: {
        key,
        title,
        description: description || null,
        email
      }
    })

    res.status(201).json(list)
  } catch (error) {
    console.error('Error creating list:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get a list by key with submissions
app.get('/api/lists/:key', async (req, res) => {
  try {
    const { key } = req.params

    const list = await prisma.list.findUnique({
      where: { key },
      include: {
        submissions: {
          orderBy: { createdAt: 'desc' }
        }
      }
    })

    if (!list) {
      return res.status(404).json({ error: 'List not found' })
    }

    res.json(list)
  } catch (error) {
    console.error('Error fetching list:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Add a submission to a list
app.post('/api/lists/:key/submissions', async (req, res) => {
  try {
    const { key } = req.params
    const { submittedBy, bringing, attendees } = req.body

    if (!submittedBy || !bringing || !attendees) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    // Check if list exists
    const list = await prisma.list.findUnique({
      where: { key }
    })

    if (!list) {
      return res.status(404).json({ error: 'List not found' })
    }

    // Generate unique key for submission
    let submissionKey
    let attempts = 0
    do {
      submissionKey = generateKey()
      const existing = await prisma.submission.findUnique({ where: { key: submissionKey } })
      if (!existing) break
      attempts++
    } while (attempts < 10)

    if (attempts >= 10) {
      return res.status(500).json({ error: 'Failed to generate unique key' })
    }

    const submission = await prisma.submission.create({
      data: {
        key: submissionKey,
        submittedBy,
        bringing,
        attendees: parseInt(attendees),
        listId: list.id
      }
    })

    res.status(201).json(submission)
  } catch (error) {
    console.error('Error creating submission:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get a single submission by key
app.get('/api/submissions/:key', async (req, res) => {
  try {
    const { key } = req.params

    const submission = await prisma.submission.findUnique({
      where: { key },
      include: {
        list: true
      }
    })

    if (!submission) {
      return res.status(404).json({ error: 'Submission not found' })
    }

    res.json(submission)
  } catch (error) {
    console.error('Error fetching submission:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Update a submission
app.put('/api/submissions/:key', async (req, res) => {
  try {
    const { key } = req.params
    const { submittedBy, bringing, attendees } = req.body

    if (!submittedBy || !bringing || !attendees) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    const submission = await prisma.submission.update({
      where: { key },
      data: {
        submittedBy,
        bringing,
        attendees: parseInt(attendees)
      }
    })

    res.json(submission)
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Submission not found' })
    }
    console.error('Error updating submission:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Delete a submission
app.delete('/api/submissions/:id', async (req, res) => {
  try {
    const { id } = req.params

    await prisma.submission.delete({
      where: { id: parseInt(id) }
    })

    res.status(204).send()
  } catch (error) {
    console.error('Error deleting submission:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
