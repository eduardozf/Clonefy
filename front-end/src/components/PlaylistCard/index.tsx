import React, { useEffect, useState } from 'react';
import api from '../../services/Api';

import { Background, Container, InfoContainer, PlayButtonContainer, PlayButton } from './styles';

function handleShowPlaylist() {
  alert("Opening Playlist!");
}

function handlePlay(e: any) {
  e.stopPropagation();
  alert("Playng Music!");
  return;
}

interface Props {
  playlistID: string;
}

const PlaylistCard: React.FC<Props> = ({ playlistID }) => {
  const [playlist, setPlaylist] = useState<any>([]);
  useEffect(() => {
    api.get(`playlists/${playlistID}`).then(res => {
      setPlaylist(res.data[0]);
    })
  }, [])

  return (
    <Background onClick={handleShowPlaylist} key={playlistID}>
      <Container>
        <img
          aria-hidden="false"
          draggable="false"
          loading="lazy"
          src={playlist.avatar}
          alt="" />
        <InfoContainer>
          <h3>{playlist.name}</h3>
          <span>{playlist.description}</span>
        </InfoContainer>
      </Container>
      <PlayButtonContainer className="playBTN">
        <PlayButton onClick={handlePlay}>
          <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true">
            <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon>
          </svg>
        </PlayButton>
      </PlayButtonContainer>
    </Background>
  );
}

export default PlaylistCard;