import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { usersApi } from '../api/users';
import { useUserStore } from '../store/userStore';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { currentUserId, selectUser } = useUserStore();

  useEffect(() => {
    usersApi.getAll()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-12">Loading users...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-slate-800">Users</h1>
        <Link
          to="/users/new"
          className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition"
        >
          Add User
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="w-12 px-6 py-3"></th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-slate-700">Name</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-slate-700">Email</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-slate-700">Role</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-slate-700">Status</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {users.map(user => (
              <tr
                key={user.id}
                className={`transition ${
                  currentUserId === user.id
                    ? 'bg-blue-50'
                    : 'hover:bg-slate-50'
                }`}
              >
                <td className="px-6 py-4">
                  <button
                    onClick={() => selectUser(user.id)}
                    className="flex items-center justify-center w-5 h-5 rounded-full border-2 transition"
                    style={{
                      borderColor: currentUserId === user.id ? '#3b82f6' : '#cbd5e1',
                      backgroundColor: currentUserId === user.id ? '#3b82f6' : 'transparent',
                    }}
                    aria-label={`Set ${user.firstName} ${user.lastName} as current user`}
                  >
                    {currentUserId === user.id && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </button>
                </td>
                <td className="px-6 py-4">
                  <div className="font-medium text-slate-800">
                    {user.firstName}
                    {' '}
                    {user.lastName}
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600">{user.email}</td>
                <td className="px-6 py-4">
                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-slate-100 text-slate-700">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                    user.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <Link
                      to={`/users/${user.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      View
                    </Link>
                    <Link
                      to={`/users/${user.id}/edit`}
                      className="text-slate-600 hover:text-slate-800 text-sm font-medium"
                    >
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {users.length === 0 && (
        <div className="text-center py-12 text-slate-600">
          No users found. Add your first user to get started.
        </div>
      )}
    </div>
  );
}
