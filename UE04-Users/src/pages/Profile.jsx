import { useUserStore } from '../store/userStore';
import { Link } from 'react-router';

export default function Profile() {
  const { currentUser, clearUser } = useUserStore();

  if (!currentUser) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">No User Selected</h1>
        <p className="text-slate-600 mb-6">Please select a user from the users list first.</p>
        <Link
          to="/users"
          className="inline-block bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition"
        >
          Go to Users
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-slate-800">Profile</h1>
        <button
          onClick={clearUser}
          className="text-red-600 hover:text-red-800 text-sm font-medium"
        >
          Clear Current User
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
        <div className="bg-slate-800 px-6 py-8 text-center">
          <div className="w-24 h-24 bg-slate-600 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4">
            {currentUser.firstName[0]}
            {currentUser.lastName[0]}
          </div>
          <h2 className="text-2xl font-bold text-white">
            {currentUser.firstName}
            {' '}
            {currentUser.lastName}
          </h2>
          <p className="text-slate-300 mt-1">{currentUser.email}</p>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-slate-600">First Name</label>
              <p className="text-slate-800 mt-1">{currentUser.firstName}</p>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-600">Last Name</label>
              <p className="text-slate-800 mt-1">{currentUser.lastName}</p>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-600">Email</label>
            <p className="text-slate-800 mt-1">{currentUser.email}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-slate-600">Role</label>
              <p className="mt-1">
                <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-slate-100 text-slate-700">
                  {currentUser.role}
                </span>
              </p>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-600">Status</label>
              <p className="mt-1">
                <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                  currentUser.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
                >
                  {currentUser.status}
                </span>
              </p>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-600">Member Since</label>
            <p className="text-slate-800 mt-1">
              {new Date(currentUser.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>

        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
          <Link
            to={`/users/${currentUser.id}/edit`}
            className="inline-block bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
