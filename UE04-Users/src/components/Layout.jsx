import { Outlet, NavLink, Link } from 'react-router';
import { useUserStore } from '../store/userStore';

export default function Layout() {
  const { currentUser } = useUserStore();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-800 text-white shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-2xl font-bold">Usaz</Link>
              <div className="space-x-6">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? 'text-white font-semibold' : 'text-slate-300 hover:text-white transition'}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/users"
                  className={({ isActive }) =>
                    isActive ? 'text-white font-semibold' : 'text-slate-300 hover:text-white transition'}
                >
                  Users
                </NavLink>
              </div>
            </div>

            <div>
              {currentUser
                ? (
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 text-slate-300 hover:text-white transition"
                    >
                      <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-sm font-semibold">
                        {currentUser.firstName[0]}
                        {currentUser.lastName[0]}
                      </div>
                      <span className="text-sm">
                        {currentUser.firstName}
                        {' '}
                        {currentUser.lastName}
                      </span>
                    </Link>
                  )
                : (
                    <span className="text-slate-400 text-sm">No user selected</span>
                  )}
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-4 py-6 text-center text-slate-600">
          <p>&copy; 2025 Usaz. Simple User Management.</p>
        </div>
      </footer>
    </div>
  );
}
