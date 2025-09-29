import { createContext } from 'react';

// what inside we can actualle delete it
export const ThemeContext = createContext({ color: 'yellew', setColor: (color) => {} });
