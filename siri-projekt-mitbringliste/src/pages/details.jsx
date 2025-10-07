import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router';

export function DetailsPage() {
  const { key, submissionkey } = useParams();
  const [submissionList, setSubmissionList] = useState(null);
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const numberRef = useRef(null);
  const bringingRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // console.log(key, submissionkey);

  async function fetchSubmissions() {
    const resp = await fetch(`http://localhost:3000/api/lists/${key}`);
    const data = await resp.json();
    setSubmissionList(data);
  }

  // fetch in the beginning
  useEffect(() => {
    fetchSubmissions();
  }, []);

  function emptyForm() {
    nameRef.current.value = '';
    bringingRef.current.value = '';
    numberRef.current.value = '';
  }

  function handleClick(s) {
    navigate(`/list/${key}/entry/${s.key}`);
    console.log(s);
    nameRef.current.value = s.submittedBy;
    bringingRef.current.value = s.bringing;
    numberRef.current.value = s.attendees;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const guestList = Object.fromEntries(formData);

    if (!submissionkey) {
      const resp = await fetch(`http://localhost:3000/api/lists/${key}/submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          submittedBy: guestList.name,
          bringing: guestList.bringing,
          attendees: guestList.attendees,
        }),
      });

      const data = await resp.json();

      // ✅ รีโหลด list ใหม่ทันที
      await fetchSubmissions();

      // emptyForm();
      toast.success('Eintrag hinzugefügt!');
      navigate(`/list/${key}/entry/${data.key}`);
    }

    // if (!submissionkey) {
    //   fetch(`http://localhost:3000/api/lists/${key}/submissions`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       submittedBy: guestList.name,
    //       bringing: guestList.bringing,
    //       attendees: guestList.attendees,
    //     }),
    //   })
    //     .then(resp => resp.json())
    //     .then((data) => {
    //       navigate(`/list/${key}/entry/${data.key}`);
    //     });
    // }
    else {
      const resp = await fetch(`http://localhost:3000/api/submissions/${submissionkey}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          submittedBy: guestList.name,
          bringing: guestList.bringing,
          attendees: guestList.attendees,
        }),
      });

      if (resp.ok) {
        await fetchSubmissions(); // โหลด list ใหม่ให้เห็นการเปลี่ยนแปลงทันที
        toast.success('Eintrag wurde aktualisiert!');
        navigate(`/list/${key}/entry/${submissionkey}`);
      }
      else {
        toast.error('Fehler beim Aktualisieren!');
      }
    }
  }

  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/lists/${key}`)
  //     .then(resp => resp.json())
  //     .then(data => setSubmissionList(data));
  // }, [key]);

  function handleDelete(s) {
    console.log(s);
    fetch(`http://localhost:3000/api/submissions/${s.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // เอาข้อมูลที่ถูกลบออกจาก state ทันที
        setSubmissionList(prev => ({
          ...prev,
          submissions: prev.submissions.filter(sub => sub.id !== s.id),
        }));
        emptyForm();
        toast.success('Eintrag wurde gelöscht!');
      });
  }

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-stone-100 p-6 gap-4">

          {/* the form */}
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-2xl font-semibold text-stone-800 mb-2 text-center">
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
                className={`w-full font-semibold py-2 rounded-lg transition-colors
                ${submissionkey
      ? 'bg-red-700 hover:bg-red-800 text-white'
      : 'bg-stone-800 hover:bg-stone-700 text-white'
    }`}
              >
                {submissionkey ? 'Aktualisieren' : 'Absenden'}
              </button>
            </form>
          </div>

          {/* the details box */}
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">

            <h1 className="text-2xl font-semibold text-stone-800 mb-2 text-center">
              Link zur Liste
            </h1>

            {/* Code Field (autocopy) */}
            <div>
              <label className="block text-stone-600 font-normal mb-1" htmlFor="code">
                Speichere diesen Link, um deinen Beitrag später zu sehen :
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
            </div>

          </div>

          <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
            <ul>
              {/* Container for List Rendering */}
              { submissionList && (
                <div>
                  {/* <h1 className="text-2xl font-semibold text-stone-800 mb-2 text-center">
                    Gästeliste
                  </h1> */}

                  <div onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center py-4">
                    <span></span>
                    <span className="text-2xl font-semibold text-stone-800 mb-2 text-center">Gästeliste</span>
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
                  )}
                </div>

              )}
            </ul>
          </div>

        </div>

      </div>
    </>
  );
}
