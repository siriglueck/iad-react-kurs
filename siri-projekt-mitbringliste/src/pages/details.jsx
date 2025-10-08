import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export function DetailsPage() {
  const { key, submissionkey } = useParams();
  const [submissionList, setSubmissionList] = useState(null);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ name: '', bringing: '', attendees: '' });

  // Derived State
  const currentSubmission = (submissionkey && submissionList) ? submissionList.submissions.find(s => s.key === submissionkey) : null;

  // to be called and rerendered
  async function fetchSubmissions() {
    const resp = await fetch(`${backendUrl}/lists/${key}`);
    const data = await resp.json();
    setSubmissionList(data);
  }

  useEffect(() => {
    if (currentSubmission) {
      setFormData({
        name: currentSubmission.submittedBy,
        bringing: currentSubmission.bringing,
        attendees: currentSubmission.attendees,
      });
    }
  }, [currentSubmission]);

  // fetch at the beginning
  useEffect(() => {
    fetchSubmissions();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const guestList = Object.fromEntries(formData);
    let hasErrors = false;

    setErrors({});

    // validate name input
    if (!guestList.name.trim()) {
      setErrors(err => ({ ...err, name: 'muss ausgefüllt werden' }));
      hasErrors = true;
    }
    else {
      setErrors(err => ({ ...err, title: '' }));
    }
    // validate bringing input
    if (!guestList.bringing.trim()) {
      setErrors(err => ({ ...err, bringing: 'muss ausgefüllt werden' }));
      hasErrors = true;
    }
    else {
      setErrors(err => ({ ...err, email: '' }));
    }
    // validate attendee inputs
    if (!guestList.attendees) {
      setErrors(err => ({ ...err, attendees: 'muss ausgefüllt werden' }));
      hasErrors = true;
    }
    else {
      setErrors(err => ({ ...err, email: '' }));
    }

    if (!currentSubmission && !hasErrors) {
      const resp = await fetch(`${backendUrl}/lists/${key}/submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          submittedBy: guestList.name,
          bringing: guestList.bringing,
          attendees: guestList.attendees,
        }),
      });

      const data = await resp.json();

      // rerender the list
      await fetchSubmissions();

      toast.success('Eintrag hinzugefügt!');
      navigate(`/list/${key}/entry/${data.key}`);
    }

    else if (currentSubmission && !hasErrors) {
      const resp = await fetch(`${backendUrl}/submissions/${currentSubmission.key}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          submittedBy: guestList.name,
          bringing: guestList.bringing,
          attendees: guestList.attendees,
        }),
      });

      if (resp.ok) {
        await fetchSubmissions();
        toast.success('Eintrag wurde aktualisiert!');
        navigate(`/list/${key}/entry/${currentSubmission.key}`);
      }
      else {
        toast.error('Fehler beim Aktualisieren!');
      }
    }
  }

  function handleDelete(s) {
    console.log(s);
    fetch(`${backendUrl}/submissions/${s.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setSubmissionList(prev => ({
          ...prev,
          submissions: prev.submissions.filter(sub => sub.id !== s.id),
        }));

        toast.success('Eintrag wurde gelöscht!');
      });
  }

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-stone-100 p-6 gap-4">

          {/* List Details */}
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">

            <div className="mb-4 mx-auto bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h2 className="text-xl font-semibold text-stone-800 mb-2">{submissionList?.title}</h2>
              <h3 className="text-md font-semibold text-stone-800 mb-2">
                Gesamtanzahl der Teilnehmer:
                {' '}
                {submissionList?.submissions.reduce((sum, sub) => sum + sub.attendees, 0)}
              </h3>
              <p className="text-stone-600 mb-3">{submissionList?.description}</p>

              <p className="text-sm text-stone-400">
                Erstelldatum:
                {' '}
                {new Date(submissionList?.createdAt).toLocaleDateString('de-DE')}
              </p>
            </div>

            {/* Code Field (autocopy) */}
            <h1 className="text-2xl font-semibold text-stone-800 mb-4 text-center">
              {currentSubmission ? 'Link zum Beitrag' : 'Link zur Liste'}
            </h1>
            <div>
              <label className="block text-stone-600 font-normal mb-1" htmlFor="code">
                {currentSubmission ? '⚠️ Speichere diesen Link, um deinen Beitrag später zu bearbeiten' : '⚠️ Speichere diesen Link, um dieser List später zu sehen'}

              </label>
              <div
                onClick={() => {
                  { currentSubmission ? navigator.clipboard.writeText(submissionkey) : navigator.clipboard.writeText(key); }
                  toast.success('Der Code ist kopiert!');
                }}
                id="code"
                className="w-full border border-stone-300 rounded-lg px-4 py-2 bg-stone-100 text-stone-800 cursor-pointer select-all"
              >
                {currentSubmission ? submissionkey : key}
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
            <div onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center py-4">
              <span></span>
              <h1 className="text-2xl font-semibold text-stone-800 mb-2 text-center">
                {currentSubmission ? 'Beitrag bearbeiten' : 'Beitrag erstellen'}
              </h1>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {isOpen && (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    className="block text-stone-700 font-medium mb-1"
                    htmlFor="name"
                  >
                    Name
                    {' '}
                    <span className="text-red-500">*</span>
                    {errors.name && <span className="text-red-500 font-semibold">{errors.name}</span>}
                  </label>
                  <input
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}

                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400"
                    placeholder="Dein Name"
                  />
                </div>

                {/* Was wird mitgebracht? */}
                <div>
                  <label className="block text-stone-700 font-medium mb-1" htmlFor="bringing">
                    Was wird mitgebracht?
                    {' '}
                    <span className="text-red-500">*</span>
                    {errors.bringing && <span className="text-red-500 font-semibold">{errors.bringing}</span>}
                  </label>
                  <input
                    value={formData.bringing}
                    onChange={e => setFormData({ ...formData, bringing: e.target.value })}

                    type="text"
                    id="bringing"
                    name="bringing"
                    required
                    className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400"
                    placeholder="Z.B. Kuchen, Getränke..."
                  />
                </div>

                {/* Anzahl Personen */}
                <div>
                  <label className="block text-stone-700 font-medium mb-1" htmlFor="attendees">
                    Anzahl Personen
                    {' '}
                    <span className="text-red-500">*</span>
                    {errors.attendees && <span className="text-red-500 font-semibold">{errors.attendees}</span>}
                  </label>
                  <input

                    value={formData.attendees}
                    onChange={e => setFormData({ ...formData, attendees: e.target.value })}
                    type="number"
                    id="attendees"
                    name="attendees"
                    required
                    min="1"
                    className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400"
                    placeholder="1"
                  />
                </div>

                {/* Submit Button */}

                <button
                  type="submit"
                  className={`w-full font-semibold py-2 rounded-lg transition-colors
                ${currentSubmission
                ? 'bg-red-700 hover:bg-red-800 text-white'
                : 'bg-stone-800 hover:bg-stone-700 text-white'
              }`}
                >
                  {currentSubmission ? 'Aktualisieren' : 'Absenden'}
                </button>

              </form>
            )}
          </div>

          {/* Gast List */}
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
            { submissionList && (
              <div>
                <span className="text-2xl font-semibold text-stone-800 mb-4 text-center">Gästeliste</span>
                <ul className="space-y-4">
                  {/* List Rendering */}
                  {submissionList.submissions
                    && submissionList.submissions.map(s => (
                      <li
                        key={s.id}
                        className="flex flex-col bg-gray-50 border border-gray-200 rounded-xl p-4 hover:bg-gray-100 transition"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-800">
                            {s.submittedBy}
                          </span>
                          <span className="text-sm text-gray-500">
                            {s.attendees}
                            {' '}
                            Teilnehmer
                          </span>
                        </div>

                        <div className="mt-1 text-gray-600 flex justify-between items-center">
                          bringt
                          {' '}
                          <span className="italic text-gray-700">
                            {s.bringing || '—'}
                          </span>

                          <span className="basis-6">
                            { (s === currentSubmission) && (
                              <button
                                onClick={() => handleDelete(s)}
                              >
                                ❌
                              </button>
                            ) }
                          </span>

                        </div>
                      </li>
                    ))}
                </ul>

              </div>

            )}

          </div>

        </div>

      </div>
    </>
  );
}
