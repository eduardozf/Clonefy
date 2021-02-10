import React, { useContext } from 'react';

import { PlayArrow, PauseRounded, SkipNext, SkipPrevious, Shuffle, Repeat, RepeatOne, Add, PlaylistAdd } from '@material-ui/icons';
import { Button, Input, Slider } from '@material-ui/core';
import './styles.css';

import { playerContext } from '../../context/Player';

function Test() {

  const musicsFromPlaylist = [
    '4b9b19ae-07a5-4f78-a2b3-8fd9aa695e52',
    '8cabb30d-b41f-4690-9388-6a2686508639'
  ]

  const {
    music,
    MusicPlay, MusicPause, TogglePlay,
    loopMode, RepeatMode, ShuffleMode,
    musicIndex, musicsQueue,
    PreviousMusic, NextMusic,
    AddMusic, AddPlaylistMusics,
  } = useContext(playerContext);

  return (
    <div id="App">
      <div id="container">

        <span>Extra Options</span>
        <div className="extra-options">
          <Button variant="outlined" color="primary" onClick={() => { MusicPlay() }}>
            <PlayArrow />
          </Button>
          <Button variant="outlined" color="primary" onClick={() => { MusicPause() }}>
            <PauseRounded />
          </Button>
          <Button variant="outlined" color="primary" onClick={() => { ShuffleMode() }}>
            <Shuffle />
          </Button>
          <Button variant="outlined" color="primary" onClick={() => { RepeatMode() }}>
            {
              {
                0: <Repeat />,
                1: <Repeat style={{ color: '#60bf79' }} />,
                2: <RepeatOne style={{ color: '#60bf79' }} />
              }[loopMode]
            }

          </Button>
        </div>

        <div style={{ width: '100%', height: '2px', background: '#ccc', margin: '10px 0' }} />

        <span>Add Music</span>

        <div className="add-music-container">
          <Button variant="outlined" color="primary" onClick={() => { AddMusic(document.getElementById("music-url").value) }}>
            <Add />
          </Button>
          <Input id="music-url" placeholder="Music ID" defaultValue="a1ec2d5a-0df0-42ea-b4ed-dd4558c36e28" style={{ flex: 1 }} />
        </div>

        <span>Add from playlist</span>
        <Button variant="outlined" color="primary" onClick={() => { AddPlaylistMusics(musicsFromPlaylist) }}>
          <PlaylistAdd />
        </Button>

        <div style={{ width: '100%', height: '2px', background: '#ccc', margin: '10px 0' }} />

        <span>Controls</span>
        <div className="options">
          <Button variant="outlined" color="primary" onClick={() => { PreviousMusic() }}>
            <SkipPrevious />
          </Button>
          <Button variant="outlined" color="primary" onClick={() => { TogglePlay() }}>
            {
              music.paused ?
                <PlayArrow /> :
                <PauseRounded />
            }
          </Button>
          <Button variant="outlined" color="primary" onClick={() => { NextMusic() }}>
            <SkipNext />
          </Button>
          <Slider
            onChange={(e, value) => { music.volume = value }}
            value={music.volume}
            min={0}
            max={1}
            step={0.05}
          />
        </div>

        <div className="timeContainer">
          <div className="current">{music.currentTime.toFixed()}</div>
          <Slider
            onChange={(e, value) => { music.currentTime = value }}
            value={music.currentTime}
            min={0}
            max={music.duration}
          />
          <div className="duration">{music.duration.toFixed()}</div>
        </div>

        <div className="music-info">
          {
            (musicsQueue[0] == null) ?
              <img src='https://i.imgur.com/k879l8i.png' /> :
              <img src={musicsQueue[musicIndex].avatar} />

          }
          <div>
            <span>{
              (musicsQueue[0] == null) ?
                'Music name' :
                musicsQueue[musicIndex].name
            }</span>
            <a href="">Artist: {
              (musicsQueue[0] == null) ?
                'Artist name' :
                musicsQueue[musicIndex].artist
            }</a>
            <a href="">Index: {musicIndex}</a>
          </div>
        </div>

      </div>
    </div>
  )
}



export default Test
