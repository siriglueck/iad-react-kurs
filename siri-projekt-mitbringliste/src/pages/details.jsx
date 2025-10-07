import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router';

export function DetailsPage() {
  const { key, submissionkey } = useParams();
  const [submissionList, setSubmissionList] = useState(null);
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const bringingRef = useRef(null);
  const numberRef = useRef(null);

  console.log(key, submissionkey);

  function handleClick(s) {
    navigate(`/list/${key}/entry/${s.key}`);
    console.log(s);
    nameRef.current.value = s.submittedBy;
    bringingRef.current.value = s.bringing;
    numberRef.current.value = s.attendees;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const guestList = Object.fromEntries(formData);

    if (!submissionkey) {
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
          navigate(`/list/${key}/entry/${data.key}`);
        });
    }
    else {
      console.log('patch');
    }
  }

  useEffect(() => {
    fetch(`http://localhost:3000/api/lists/${key}`)
      .then(resp => resp.json())
      .then(data => setSubmissionList(data));
  }, [key]);

  function handleDelete(s) {
    console.log(s);
    fetch(`http://localhost:3000/api/submissions/${s.id}`, {
      method: 'DELETE',
    });
  }

  console.log(submissionList);

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-stone-100 p-6">

          {/* the details box */}
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">

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
                  toast.success('Der Code ist kopiert!');
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
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
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
                  ref={nameRef}
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
                  ref={bringingRef}
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
                  ref={numberRef}
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

          <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
            <h1>here shows guest list</h1>
            {/* http://localhost:3000/api/lists/wwlse7/submission[0] */}
            <ul>
              {/* Container for List Rendering */}
              { submissionList && (
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 text-center">
                    Gästeliste
                  </h1>

                  <ul className="space-y-4">
                    {submissionList.submissions
                      && submissionList.submissions.map(s => (
                        <li
                          key={s.id}
                          onClick={() => handleClick(s)}
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
                            <span>
                              <button
                                onClick={() => handleDelete(s)}
                              >
                                ❌
                              </button>
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
