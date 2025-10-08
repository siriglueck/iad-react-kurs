import { useNavigate } from 'react-router';

export default function StartPage() {
  const navigate = useNavigate();

  function handleSubmit(formData) {
    const listTitle = formData.get('title').trim();
    navigate(listTitle ? '/create/' + encodeURIComponent(listTitle) : '/create');
  }

  return (
    <div>

      <div className="min-h-screen bg-stone-100 flex flex-col justify-center items-center gap-5 p-1">
        <img src="/list-logo.svg" alt="Logo" className="w-32 h-32" />
        <h1 className="text-8xl font-semibold text-center text-stone-700"> liste.live</h1>
        <p className="text-stone-500"> Organize your party - Nie wieder doppelt einkaufen.</p>
        <form action={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm w-full max-w-sm space-y-4">
          <div>
            <label htmlFor="title" className="block text-stone-600 text-sm mb-1">Titel deiner Liste</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="z.B. Geburtstag von Siri, Grillparty am See ..."
              className="w-full border border-stone-300 rounded-lg px-3 py-2 text-stone-700 focus:outline-none focus:ring-1 focus:ring-stone-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-stone-700 text-white py-2 rounded-lg hover:bg-stone-300 transition"
          >
            Liste erstellen
          </button>
        </form>

      </div>

    </div>
  );
}
