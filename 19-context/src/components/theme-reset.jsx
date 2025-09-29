import { useContext } from 'react';
import { ThemeContext } from '../utils/theme-context';

export function ThemeReset() {
  const { setColor } = useContext(ThemeContext);
  return (
    <>
      <div>
        <button onClick={() => setColor('#000000')}> Reset Theme </button>
      </div>
    </>
  );
}
