import { useAuth } from '../utils/use-auth';

export function AuthDisplay() {
  console.log('Render AuthDisplay');

  const { user } = useAuth();

  return (
    <div>
      Hallo
      {' '}
      {user?.name || 'Unbekannte/r'}
    </div>
  );
}
