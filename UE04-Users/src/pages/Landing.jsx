import { Link } from 'react-router';

export default function Landing() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-slate-800 mb-4">Welcome to Usaz</h1>
        <p className="text-xl text-slate-600">Simple and efficient user management</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
          <div className="text-3xl mb-3">👥</div>
          <h3 className="text-lg font-semibold mb-2">Manage Users</h3>
          <p className="text-slate-600">Create, edit, and organize your user base efficiently</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
          <div className="text-3xl mb-3">🔍</div>
          <h3 className="text-lg font-semibold mb-2">Search & Filter</h3>
          <p className="text-slate-600">Find users quickly with powerful search tools</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
          <div className="text-3xl mb-3">📊</div>
          <h3 className="text-lg font-semibold mb-2">Track Activity</h3>
          <p className="text-slate-600">Monitor user activity and engagement metrics</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/users"
          className="inline-block bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
