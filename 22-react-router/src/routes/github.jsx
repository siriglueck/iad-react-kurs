import { Outlet, useNavigate } from 'react-router';

// here is the layout
export default function GithubRoute() {
  const navigate = useNavigate();

  function handleChange(ev) {
    navigate(ev.target.value);
  }

  return (
    <div>
      <h2>GitHub</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <div style={{ paddingTop: '1.25rem' }}>
          <select onChange={handleChange}>
            <option value="">Bitte wählen...</option>
            <option value="angular">Angular</option>
            <option value="facebook">React</option>
            <option value="vuejs">Vue</option>
          </select>
        </div>
        <div style={{ paddingInline: '1rem', borderLeftStyle: 'solid', backgroundColor: '#eee' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
