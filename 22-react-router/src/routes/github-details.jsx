import { useParams } from 'react-router';
import { useFetch } from '../utils/use-fetch';

export default function GitHubDetailsRoute() {
  const { acc } = useParams();

  // fetch(`https://api.github.com/users/${acc}`)
  const { data, isLoading, error } = useFetch(`http://localhost:3000/users/${acc}`);

  return (
    <div>
      <h2>
        <span>GitHub Infos für </span>
        <span>{acc}</span>
      </h2>
      { isLoading && <p>Daten werden geladen ...</p>}
      { error && <p style={{ color: 'red' }}>{error}</p>}
      { !isLoading && data && (
        <div>
          <span>Angelegt am </span>
          <span>{new Date(data.created_at).toLocaleDateString()}</span>
        </div>
      )}
    </div>
  );
}
