import { Outlet } from 'react-router';

export function PageLayout() {
  return (
    <>
      <header className="bg-stone-200 py-4 flex justify-start px-5 shadow-sm">
        <h1 className="text-2xl font-semibold text-center text-stone-700"> 🏁 liste.live</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
