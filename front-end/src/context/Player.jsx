import React, { createContext, useState, useEffect } from "react";

export const playerContext = createContext();

export default function PlayerProvider({ children }) {
  const [music, setMusic] = useState(new Audio());
  const [musicVolume, setMusicVolume] = useState(1);
  const [musicCurrentTime, setMusicCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setMusic(new Audio("http://localhost:3333/musics/8cabb30d-b41f-4690-9388-6a2686508639"));
  }, []);

  music.ontimeupdate = () => {
    setMusicCurrentTime(music.currentTime);
  }

  function PlayPause() {
    console.log('Executou PlayPause');
    if (!isPlaying) {
      setIsPlaying(true);
      music.play();
    } else {
      setIsPlaying(false);
      music.pause();
    }
  }

  return (
    <playerContext.Provider value={{
      music,
      isPlaying,
      PlayPause,
    }}>
      {children}
    </playerContext.Provider>
  );
}
