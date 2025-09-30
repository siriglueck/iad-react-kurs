import { useAuth } from '../store/auth';

export function AuthDisplay() {
  console.log('Render AuthDisplay');

  const user = useAuth(state => state.user);

  return (
    <div>
      Hallo
      {' '}
      {user?.name || 'Unbekannte/r'}
    </div>
  );
}
