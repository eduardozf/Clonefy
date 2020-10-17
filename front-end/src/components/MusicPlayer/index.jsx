import React, { useContext } from 'react';
import { playerContext } from '../../context/Player';

import { Slider } from '@material-ui/core';
import {
  Shuffle,
  PlayCircleOutline,
  PauseCircleOutlineOutlined,
  SkipNext,
  SkipPrevious,
  Repeat,
  FavoriteBorder,
  QueueMusic,
  MicNone,
  ImportantDevices,
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
    isPlaying,
    PlayPause
  } = useContext(playerContext);

  return (
    <Container>
      <MusicInfo>
        <div>
          <img src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" alt="" width="56px" height="56px" />
        </div>
        <MusicNAContainer>
          <MusicName href="">Musicas curtidas</MusicName>
          <MusicAuthor href="">Clonefy</MusicAuthor>
        </MusicNAContainer>
        <LikeMusicContainer>
          <button onClick={() => { }}>
            <FavoriteBorder style={{ fontSize: 18 }} />
          </button>
        </LikeMusicContainer>
      </MusicInfo>

      <PlayerControls>
        <PlayerButtonsContainer>
          <button>
            <Shuffle style={{ fontSize: 20 }} />
          </button>
          <button>
            <SkipPrevious style={{ fontSize: 20 }} />
          </button>
          <button onClick={() => { PlayPause(); }}>
            {(isPlaying) ?
              (<PauseCircleOutlineOutlined style={{ fontSize: 40 }} />) :
              (<PlayCircleOutline style={{ fontSize: 40 }} />)
            }

          </button>
          <button>
            <SkipNext style={{ fontSize: 20 }} />
          </button>
          <button>
            <Repeat style={{ fontSize: 20 }} />
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
          <a onClick={() => { }}>
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
