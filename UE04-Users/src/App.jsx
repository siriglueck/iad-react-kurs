import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { useUserStore } from './store/userStore';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Users from './pages/Users';
import Profile from './pages/Profile';
import UserCreate from './pages/UserCreate';
import UserEdit from './pages/UserEdit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'users/new',
        element: <UserCreate />,
      },
      {
        path: 'users/:id/edit',
        element: <UserEdit />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

function AppWithStore() {
  const initialize = useUserStore(state => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return <RouterProvider router={router} />;
}

export default function App() {
  return <AppWithStore />;
}
