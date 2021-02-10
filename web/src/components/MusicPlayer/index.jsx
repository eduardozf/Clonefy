import React, { useContext } from 'react';
import { playerContext } from '../../context/Player';

import { Slider } from '@material-ui/core';
import {
  Shuffle,
  PlayCircleOutline, PauseCircleOutlineOutlined,
  SkipNext, SkipPrevious,
  Repeat, RepeatOne,
  FavoriteBorder,
  QueueMusic,
  MicNone, ImportantDevices,
  VolumeDown
} from '@material-ui/icons';
import {
  Container,
  MusicAuthor,
  MusicInfo,
  MusicNAContainer,
  MusicName,
  LikeMusicContainer,
  PlayerControls,
  PlayerOption,
  PlayerButtonsContainer,
  PlayerTimelineContainer,
  VolumeContainer
} from './styles';

function MusicPlayer() {
  const {
    music,
    TogglePlay,
    loopMode, RepeatMode, ShuffleMode,
    musicIndex, musicsQueue,
    PreviousMusic, NextMusic,
  } = useContext(playerContext);

  return (
    <Container>
      <MusicInfo>
        <div>
          {
            (musicsQueue[0] == null) ?
              <img src='https://i.imgur.com/k879l8i.png' alt="" width="56px" height="56px" /> :
              <img src={musicsQueue[musicIndex].avatar} alt="" width="56px" height="56px" />
          }
        </div>
        <MusicNAContainer>
          <MusicName href="/">
            {
              (musicsQueue[0] == null) ?
                'Music name' :
                musicsQueue[musicIndex].name
            }
          </MusicName>
          <MusicAuthor href="/">
            {
              (musicsQueue[0] == null) ?
                'Artist name' :
                musicsQueue[musicIndex].artist
            }
          </MusicAuthor>
        </MusicNAContainer>
        <LikeMusicContainer>
          <button onClick={() => { }}>
            <FavoriteBorder style={{ fontSize: 18 }} />
          </button>
        </LikeMusicContainer>
      </MusicInfo>

      <PlayerControls>
        <PlayerButtonsContainer>
          <button onClick={() => { ShuffleMode() }}>
            <Shuffle style={{ fontSize: 20 }} />
          </button>
          <button onClick={() => { PreviousMusic(); }}>
            <SkipPrevious style={{ fontSize: 20 }} />
          </button>
          <button onClick={() => { TogglePlay(); }}>
            {(music.paused) ?
              (<PlayCircleOutline style={{ fontSize: 40 }} />) :
              (<PauseCircleOutlineOutlined style={{ fontSize: 40 }} />)
            }
          </button>
          <button>
            <SkipNext onClick={() => { NextMusic() }} style={{ fontSize: 20 }} />
          </button>
          <button onClick={() => { RepeatMode() }}>
            {
              {
                0: <Repeat />,
                1: <Repeat style={{ color: '#60bf79' }} />,
                2: <RepeatOne style={{ color: '#60bf79' }} />
              }[loopMode]
            }

          </button>
        </PlayerButtonsContainer>

        <PlayerTimelineContainer>
          <div>{music.currentTime.toFixed()}</div>
          <Slider
            id="MusicSlider"
            min={0}
            max={music.duration}
            step={1}
            value={music.currentTime}
            onChangeCommitted={(e, value) => { music.currentTime = value }}
            className="MusicTime" />
          <div>{music.duration.toFixed()}</div>
        </PlayerTimelineContainer>

      </PlayerControls>

      <PlayerOption>
        <a onClick={() => { }}>
          <MicNone style={{ fontSize: 18 }} />
        </a>
        <a onClick={() => { }}>
          <QueueMusic style={{ fontSize: 18 }} />
        </a>
        <a onClick={() => { }}>
          <ImportantDevices style={{ fontSize: 18 }} />
        </a>
        <VolumeContainer>
          <a onClick={() => { music.volume = 0 }}>
            <VolumeDown style={{ fontSize: 18 }} />
          </a>
          <Slider
            id="VolumeSlider"
            className="MusicVolume"
            value={music.volume}
            onChange={(e, value) => { music.volume = value }}
            min={0}
            max={1}
            step={0.05}
            defaultValue={1}
          />
        </VolumeContainer>
      </PlayerOption>
    </Container>
  );
}

export default MusicPlayer;
