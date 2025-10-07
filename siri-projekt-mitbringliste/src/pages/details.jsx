import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

export function DetailsPage() {
  const { key, submissionkey } = useParams();
  const [, setData] = useState(null);
  const [dataForLooping, setForLooping] = useState(null);
  const navigate = useNavigate();

  console.log(key, submissionkey);

  function handleClick(smKey) {
    navigate(`/list/${key}/entry/${smKey}`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const guestList = Object.fromEntries(formData);

    fetch(`http://localhost:3000/api/lists/${key}/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        submittedBy: guestList.name,
        bringing: guestList.bringing,
        attendees: guestList.attendees,
      }),
    })
      .then(resp => resp.json())
      .then((data) => {
        setData(data);
        navigate(`/list/${key}/entry/${data.key}`);
      });
  }

  useEffect(() => {
    fetch(`http://localhost:3000/api/lists/${key}`)
      .then(resp => resp.json())
      .then(data => setForLooping(data));
  }, [key]);

  console.log(dataForLooping);

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-stone-100 p-6">

          {/* the details box */}
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

            <h1 className="text-2xl font-semibold text-stone-800 mb-2 text-center">
              Details zur Liste
            </h1>
            <p className="text-stone-500 text-center mb-6">
              Copy your code.
            </p>

            {/* Code Field (autocopy) */}
            <div>
              <label className="block text-stone-700 font-medium mb-1" htmlFor="code">
                Link zu deinem Beitrag:
              </label>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(key);
                  alert('Code kopiert!'); // to add toast later
                }}
                id="code"
                className="w-full border border-stone-300 rounded-lg px-4 py-2 bg-stone-100 text-stone-800 cursor-pointer select-all"
              >
                {key}
              </div>
              <p className="text-sm text-stone-500 mt-1">Speichere diesen Link, um deinen Beitrag später.</p>
            </div>

          </div>

          {/* the form */}
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-2xl font-semibold text-stone-800 mb-6 text-center">
              Beitragsformular
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  className="block text-stone-700 font-medium mb-1"
                  htmlFor="name"
                >
                  Name
                  {' '}
                  <span className="text-red-500">*</span>
                </label>
                <input
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
                </label>
                <input
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
                </label>
                <input
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
                className="w-full bg-stone-800 text-white font-semibold py-2 rounded-lg hover:bg-stone-700 transition-colors"
              >
                Absenden
              </button>
            </form>
          </div>

          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
            <h1>here shows guest list</h1>
            {/* http://localhost:3000/api/lists/wwlse7/submission[0] */}
            <ul>
              {/* Container for List Rendering */}
              { dataForLooping && (
                <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
                  <h1 className="text-2xl font-bold text-gray-800 text-center">
                    Gästeliste
                  </h1>

                  <ul className="space-y-4">
                    {dataForLooping.submissions
                      && dataForLooping.submissions.map(submission => (
                        <li
                          key={submission.id}
                          onClick={e => handleClick(submission.key)}
                          className="flex flex-col bg-gray-50 border border-gray-200 rounded-xl p-4 hover:bg-gray-100 transition"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-800">
                              {submission.submittedBy}
                            </span>
                            <span className="text-sm text-gray-500">
                              {submission.attendees}
                              {' '}
                              Teilnehmer
                            </span>
                          </div>

                          <div className="mt-1 text-gray-600">
                            bringt
                            {' '}
                            <span className="italic text-gray-700">
                              {submission.bringing || '—'}
                            </span>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>

              )}
            </ul>
          </div>

        </div>

      </div>
    </>
  );
}
