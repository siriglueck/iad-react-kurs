import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { usersApi } from '../api/users';
import UserForm from '../components/UserForm';

export default function UserEdit() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    usersApi.getById(id)
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        alert('Failed to load user: ' + error.message);
        navigate('/users');
      });
  }, [id, navigate]);

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      await usersApi.update(id, {
        ...formData,
        id: user.id,
        createdAt: user.createdAt,
      });
      navigate('/users');
    }
    catch (error) {
      alert('Failed to update user: ' + error.message);
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate('/users');
  };

  if (loading) {
    return <div className="text-center py-12">Loading user...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Edit User</h1>
      <div className="bg-white rounded-lg shadow-md border border-slate-200 p-6">
        <UserForm
          user={user}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
}
