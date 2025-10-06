import { Link, useParams, useSearchParams } from 'react-router';

export default function BookMarksListRoute() {
  // In der Realität entscheide ich mich natürlich für eine Variante
  const { id } = useParams();
  const [params] = useSearchParams();

  const editId = id ?? params.get('id');

  return (
    <div>
      <h1>Lesezeichen</h1>
      <ul>
        { editId && (
          <div>
            <h2>Bookmark bearbeiten</h2>
            <h2>{editId}</h2>
            <Link to="/lesezeichen"> Abbrechen</Link>
          </div>
        )}
        <li>
          URL 1
          <Link to="/lesezeichen/edit/1"> Edit </Link>
        </li>
        <li>
          URL 2
          <Link to="/lesezeichen/edit/2"> Edit </Link>
        </li>
        <li>
          URL 3
          <Link to="/lesezeichen/edit?id=3"> Edit </Link>
        </li>
        <li>
          URL 4
          <Link to="/lesezeichen/edit?id=4"> Edit </Link>
        </li>
      </ul>
    </div>
  );
}
