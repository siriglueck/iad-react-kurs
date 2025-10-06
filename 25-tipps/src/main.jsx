import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import HomeRoute from './routes/home';
import NotFoundRoute from './routes/not-found';
import BookMarksLayout from './routes/bookmarks-layout';
import BookMarksListRoute from './routes/bookmarks-list';
import BookMarksCreateRoute from './routes/bookmarks-create';

const router = createBrowserRouter([
  { index: true, element: <HomeRoute /> },
  { element: <BookMarksLayout />, children:
    [
      { path: 'lesezeichen', element: <BookMarksListRoute /> },
      { path: 'lesezeichen/create', element: <BookMarksCreateRoute /> },
      { path: 'lesezeichen/edit/:id', element: <BookMarksListRoute /> },
      { path: 'lesezeichen/edit', element: <BookMarksListRoute /> },
    ],
  },
  // Catch-All (immer am Ende!)
  { path: '*', element: <NotFoundRoute /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
