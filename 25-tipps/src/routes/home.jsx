import { useNavigate } from 'react-router';

export default function HomeRoute() {
  const navigateTo = useNavigate();

  function handleSubmission(formData) {
    const url = formData.get('url'); // use the platform (No state or ref needed)
    navigateTo('/lesezeichen/create?url=' + encodeURIComponent(url)); // to go to the desired page
  }

  return (
    <div>
      <h1>Home</h1>
      <form action={handleSubmission}>
        <input name="url" placeholder="Dein nächstes Lesezeichen" />
        <button type="submit">Erstellen</button>
      </form>
    </div>
  );
}
