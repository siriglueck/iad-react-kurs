import { useCounter } from './counter-context';
import { InfoDisplay } from './info-display';
import { ThemeReset } from './theme-reset';

export function Container() {
  // we call this function from the global function
  // there is only one state ganz oben
  const { inc } = useCounter();
  console.log('Render Container');

  return (
    <>
      <div>
        <InfoDisplay />
        <ThemeReset />
        <button onClick={inc}> INC </button>
      </div>
    </>
  );
}
