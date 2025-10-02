import { NavLink, Outlet } from 'react-router';

export default function AdminLayout() {
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1>Admin</h1>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '0.5rem' }}>
            <li><NavLink to="">Dashboard</NavLink></li>
            <li><NavLink to="profile">Profile</NavLink></li>
          </ul>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '0.5rem' }}>
            <li><NavLink to="/">Home</NavLink></li>
          </ul>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
