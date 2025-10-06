import { Outlet } from 'react-router';

export default function BookMarksLayout() {
  return (
    <div>
      <header>
        <span>Bookmarks</span>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
