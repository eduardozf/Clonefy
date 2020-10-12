import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import Highlight from '../Highlights';

import api from '../../services/Api';
import { Iplaylist } from '../PlaylistCard';

export interface Ihighlights {
  id: string;
  title: string;
  playlists: Iplaylist[];
}
const Content: React.FC = () => {
  const [highlights, setHighlights] = useState<Ihighlights[]>([]);

  useEffect(() => {
    api.get('highlights').then(res => {
      console.log('Executou')
      setHighlights(res.data);
    })
  }, [])


  return (
    <Container>
      {highlights.map((highlightItem) => (
        <>
          < Highlight key={highlightItem.id} highlightRef={highlightItem} />
          {console.log(highlightItem)}
        </>
      ))
      }
    </Container>
  );
}

export default Content;