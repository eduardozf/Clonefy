import React from 'react';

import { Background, Container, InfoContainer, PlayButtonContainer, PlayButton } from './styles';

function handleShowPlaylist() {
  alert("Opening Playlist!");
}

function handlePlay(e: any) {
  e.stopPropagation();
  alert("Playng Music!");
  return;
}

export interface Iplaylist {
  id: string;
  name: string;
  description: string;
  avatar: string;
  musics: Object[];
  genre: string;
  private: boolean;
}

interface Props {
  playlistRef: Iplaylist;
}

const PlaylistCard: React.FC<Props> = ({ playlistRef }) => {
  return (
    <Background onClick={handleShowPlaylist} key={playlistRef.id}>
      <Container>
        <img
          aria-hidden="false"
          alt=""
          draggable="false"
          loading="lazy"
          src={playlistRef.avatar}>
        </img>
        <InfoContainer>
          <h3>{playlistRef.name}</h3>
          <span>{playlistRef.description}</span>
        </InfoContainer>
        <PlayButtonContainer className="playBTN">
          <PlayButton onClick={handlePlay}>
            <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon>
            </svg>
          </PlayButton>
        </PlayButtonContainer>
      </Container>
    </Background>
  );
}

export default PlaylistCard;