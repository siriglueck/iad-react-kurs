import { use, useContext } from 'react';
import { ThemeContext } from '../utils/theme-context';
import { ForeColorContext } from '../utils/color-context';
import { useCounter } from './counter-context';

export function InfoDisplay() {
  console.log('Render Info-Display');

  const theme = useContext(ThemeContext);

  // Seit React 19 für Context sp pmöy use
  // const foreColor = useContext(ForeColorContext);
  let foreColor = 'black';
  if (new Date().getHours() > 13)
    foreColor = use(ForeColorContext);

  const { count } = useCounter();

  return (
    <>
      <div style={{ borderStyle: 'solid', color: foreColor, borderColor: theme.color }}>
        <p>
          Netzwerk-Status:
          <span>Online</span>
        </p>
        <p>
          Zähler:
          {' '}
          {count}
        </p>
      </div>
    </>
  );
}
