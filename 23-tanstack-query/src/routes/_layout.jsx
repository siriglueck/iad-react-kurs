import { NavLink, Outlet } from 'react-router';

export default function BaseLayout() {
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1>React Router</h1>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '0.5rem' }}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/todos">Todos</NavLink></li>
            <li><NavLink to="/github">GitHub</NavLink></li>
            <li><NavLink to="/nix">404</NavLink></li>
          </ul>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '0.5rem' }}>
            <li><NavLink to="/admin">Admin</NavLink></li>
          </ul>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
