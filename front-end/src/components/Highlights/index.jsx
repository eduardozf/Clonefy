import React, { useEffect, useState } from 'react';
import api from '../../services/Api';

import { Container, Category, PlaylistContainer } from './styles';
import PlaylistCard from '../PlaylistCard';

function Highlights({ highlightRef }) {

  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    api.get('playlists/list', {
      params: {
        playlists: highlightRef.playlists
      }
    }).then(res => {
      setPlaylists(res.data);
    })
  }, []);

  return (
    <Container>
      <Category>
        <h1><a href="/">{highlightRef.title}</a></h1>
        <a href="/">VER TUDO</a>
      </Category>
      <PlaylistContainer>
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </PlaylistContainer>
    </Container>
  );
}

export default Highlights;