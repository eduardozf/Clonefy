import { createContext } from 'react';

export const playerContext = createContext();

export default function PlayerProvider({ children }) {
  return (
    <playerContext.Provider>
      {children}
    </playerContext.Provider>
  )
}