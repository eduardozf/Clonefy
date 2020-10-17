import React, { useContext } from 'react';
import { baseURL } from '../../services/Api';
import { playerContext } from '../../context/Player';

import { PlayArrow } from '@material-ui/icons';
import { Background, Container, InfoContainer, PlayButtonContainer, PlayButton } from './styles';

function PlaylistCard({ playlist }) {
  const { PlayPause } = useContext(playerContext);

  return (
    <Background onClick={() => { }}>
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
        <PlayButton onClick={(e) => { e.stopPropagation(); PlayPause() }}>
          <PlayArrow />
        </PlayButton>
      </PlayButtonContainer>
    </Background>
  );
}

export default PlaylistCard;
