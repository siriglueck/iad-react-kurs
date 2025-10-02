import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { routes } from './route-data.jsx';

const client = new QueryClient();
const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router}>
      </RouterProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
);
