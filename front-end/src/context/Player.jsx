import React, { createContext, useState, useEffect } from "react";
import api from '../services/Api';

export const playerContext = createContext();

function PlayerProvider({ children }) {
  const [music, setMusic] = useState(new Audio());
  const [musicCurrentTime, setMusicCurrentTime] = useState(0);
  const [loopMode, setLoopMode] = useState(0);
  const [shuffleMode, setShuffleMode] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicsQueue, setMusicsQueue] = useState([]);

  //
  // useEffects
  //

  useEffect(() => {
    music.volume = 0.1;
    music.autoplay = true;
  }, [])

  useEffect(() => {
    try {
      music.src = `http://192.168.15.44:3333/musics/${musicsQueue[musicIndex].id}`
    } catch (e) { }
  }, [musicIndex, musicsQueue])

  //
  // Events
  //

  music.ontimeupdate = () => {
    setMusicCurrentTime(music.currentTime);
  }

  music.onended = () => {
    console.log("Loop Mode", loopMode);
    switch (loopMode) {
      case 0:
        NextMusic();
        return;
      case 1:
        if (musicIndex >= musicsQueue.length - 1) {
          setMusicIndex(0);
        };
        return;
      case 2:
        music.play();
        return;
    }
  }

  //
  // Functions
  //

  async function AddMusic(musicID) {
    const newMusic = await api.get(`musics/${musicID}/info`);
    setMusicsQueue(lastQueue => [...lastQueue, newMusic.data]);
  }

  function AddPlaylistMusics(musicsID) {
    musicsID.forEach(music => {
      AddMusic(music);
    });
  }

  function MusicPlay() {
    music.play()
  }

  function MusicPause() {
    music.pause()
  }

  function TogglePlay() {
    (music.paused) ?
      music.play() :
      music.pause();
  }

  function RepeatMode() {
    if (loopMode + 1 >= 3) {
      setLoopMode(0);
    } else {
      setLoopMode(value => value + 1);
    }
  }

  function ShuffleMode() {
    setShuffleMode(lastValue => !lastValue);
    /* const min = Math.ceil(0);
    const max = Math.floor(musicsQueue.length);
    const ShuffleIndex = (Math.floor(Math.random() * (max - min)) + min);
    if () */
  }

  function PreviousMusic() {
    if (musicIndex - 1 >= 0) {
      setMusicIndex(index => index - 1);
    }
  }

  function NextMusic() {
    if (musicIndex + 1 <= musicsQueue.length - 1) {
      setMusicIndex(index => index + 1);
    }
  }

  //
  // RETURN
  //

  return (
    <playerContext.Provider value={{
      music,
      MusicPlay, MusicPause, TogglePlay,
      loopMode, RepeatMode, ShuffleMode,
      musicIndex, musicsQueue,
      NextMusic, PreviousMusic,
      AddMusic, AddPlaylistMusics
    }}>
      {children}
    </playerContext.Provider>
  );
}

export default PlayerProvider;
