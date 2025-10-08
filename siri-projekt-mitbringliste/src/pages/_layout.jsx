import { Link, Outlet } from 'react-router';

export function PageLayout() {
  return (
    <>
      <header className="bg-stone-200 py-4 flex justify-between items-center px-5 shadow-sm">
        <Link to="/" className="text-2xl flex gap-4 font-semibold text-center text-stone-700 hover:text-stone-900 transition">
          <img src="/list-logo.svg" alt="Logo" className="w-8 h-8" />
          liste.live
        </Link>
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
