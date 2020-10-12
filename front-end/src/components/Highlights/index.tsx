import React from 'react';

import { Container, Category, PlaylistContainer } from './styles';
import PlaylistCard from '../PlaylistCard';

import { Ihighlights } from '../Content';
interface Props {
  highlightRef: Ihighlights;
}

const Spotlights: React.FC<Props> = ({ highlightRef }) => {
  return (
    <Container>
      <Category>
        <h1><a href="/">{highlightRef.title}</a></h1>
        <a href="/">VER TUDO</a>
      </Category>
      <PlaylistContainer>
        {highlightRef.playlists.map((playlistRef) => (
          <PlaylistCard key={playlistRef.id} playlistRef={playlistRef} />
        ))}
      </PlaylistContainer>
    </Container>
  );
}

export default Spotlights;