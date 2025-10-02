import { Route } from 'react-router';
import { createRoutesFromElements } from 'react-router';
import IndexRoute from './routes';
import AboutRoute from './routes/about';
import TodosRoute from './routes/todos';
import BaseLayout from './routes/_layout';
import AdminIndexRoute from './routes/admin';
import AdminLayout from './routes/admin/_layout';
import AdminProfileRoute from './routes/admin/profile';
import GitHubDetailsRoute from './routes/github-details';
import GithubRoute from './routes/github';
import GithubIndexRoute from './routes/github-index';
import TodosDataRoute, { action as todosAction, loader as todosLoader } from './routes/todos-data';

export const routes = createRoutesFromElements([
  <Route element={<BaseLayout />}>
    <Route index element={<IndexRoute />} />
    <Route path="about" element={<AboutRoute />} />
    <Route
      path="todos"
      element={<TodosDataRoute />}
      loader={todosLoader}
      action={todosAction}
    />
    <Route path="github/" element={<GithubRoute />}>
      <Route index element={<GithubIndexRoute />} />
      <Route path=":acc" element={<GitHubDetailsRoute />} />
    </Route>
    <Route path="*" element={<h2> ne ne nichts da</h2>} />
  </Route>,
  <Route path="admin" element={<AdminLayout />}>
    <Route index element={<AdminIndexRoute />} />
    <Route path="profile" element={<AdminProfileRoute />} />
  </Route>,
]);

export const dataRoutes = [
  {
    element: <BaseLayout />,
    children: [
      { index: true, element: <IndexRoute /> },
      { path: 'about', element: <AboutRoute /> },
      { path: 'todos', element: <TodosRoute /> },
      { path: 'gh', element: <GithubRoute />, children: [
        { index: true, element: <GithubIndexRoute /> },
        { path: ':acc', element: <GitHubDetailsRoute /> },
      ] },
      { path: '*', element: <h2>Hoppla, nichts da.</h2> },
    ],
  },
  { path: 'admin', element: <AdminLayout />, children: [
    { index: true, element: <AdminIndexRoute /> },
    { path: 'profile', element: <AdminProfileRoute /> },
  ] },
];
