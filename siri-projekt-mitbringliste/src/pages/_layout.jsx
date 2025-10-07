import { Link, Outlet } from 'react-router';

export function PageLayout() {
  return (
    <>
      <header className="bg-stone-200 py-4 flex justify-between items-center px-5 shadow-sm">
        <div>
          <Link to="/" className="text-2xl font-semibold text-center text-stone-700 hover:text-stone-900 transition"> 🏁 liste.live</Link>
        </div>
        <div>
          <Link to="/create" className="text-1xl font-semibold text-center text-stone-700 hover:text-stone-900 transition"> create </Link>
        </div>

      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
