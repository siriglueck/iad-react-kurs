import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

export function CreatePage() {
  const { title } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  function handleCreateList(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const partyList = Object.fromEntries(formData);

    console.log(partyList);

    fetch('http://localhost:3000/api/lists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: partyList.title,
        description: partyList.description,
        email: partyList.email,
      }),
    })
      .then(resp => resp.json())
      .then((data) => {
        setData(data);
        navigate(`/list/${data.key}`);
      });
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-stone-100 p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-semibold text-stone-800 mb-2 text-center">
            Neue Liste erstellen
          </h1>
          <p className="text-stone-500 text-center mb-6">
            Fülle die Details aus und teile deine Liste mit deinen Gästen.
          </p>

          <form onSubmit={handleCreateList} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="title" className="text-stone-700 mb-1 font-medium">
                Titel der Liste
                {' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                name="title"
                defaultValue={title}
                type="text"
                className="border border-stone-300 rounded-lg p-2.5 focus:ring-2 focus:ring-stone-400 focus:outline-none"
                placeholder="title"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="description" className="text-stone-700 mb-1 font-medium">
                Beschreibung
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full border border-stone-300 rounded-lg p-2.5 focus:ring-2 focus:ring-stone-400 focus:outline-none"
                placeholder="Gib hier eine kurze Beschreibung ein..."
              >
              </textarea>

            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-stone-700 mb-1 font-medium">
                Deine E-Mail-Adresse
                {' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="border border-stone-300 rounded-lg p-2.5 focus:ring-2 focus:ring-stone-400 focus:outline-none"
                placeholder="beispiel@mail.com"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-stone-700 text-white py-2.5 rounded-lg mt-4 hover:bg-stone-800 transition-colors"
            >
              Liste erstellen
            </button>
          </form>
        </div>

        { data
          && (
            <div>
              <h1>Tessssssssssssssssssssssssssssssssssssssssssssssssssst</h1>
            </div>
          )}
      </div>

    </>
  );
}
