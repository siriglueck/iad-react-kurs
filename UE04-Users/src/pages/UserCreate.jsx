import { useState } from 'react';
import { useNavigate } from 'react-router';
import { usersApi } from '../api/users';
import UserForm from '../components/UserForm';

export default function UserCreate() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      await usersApi.create({
        ...formData,
        createdAt: new Date().toISOString(),
      });
      navigate('/users');
    }
    catch (error) {
      alert('Failed to create user: ' + error.message);
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate('/users');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Create New User</h1>
      <div className="bg-white rounded-lg shadow-md border border-slate-200 p-6">
        <UserForm
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
}
