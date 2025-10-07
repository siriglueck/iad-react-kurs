import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import StartPage from './pages/start';
import { PageLayout } from './pages/_layout';
import { CreatePage } from './pages/create';
import { NotFoundPage } from './pages/notfound';
import { DetailsPage } from './pages/details';

const router = createBrowserRouter([
  { index: true, element: <StartPage /> },
  { element: <PageLayout />, children: [
    { path: '/create', element: <CreatePage /> },
    { path: '/create/:title', element: <CreatePage /> },
    { path: '/list/:key', element: <DetailsPage /> },
    { path: '/list/:key/entry/:submissionkey', element: <DetailsPage /> },
    { path: '*', element: <NotFoundPage /> },
  ] },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
