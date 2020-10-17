import React, { useState, useEffect } from 'react';

import { Container, HighlightsContainer, HighlightsGrid } from './styles';
import Highlight, { Ihighlights } from '../Highlights';
import { MusicPlayer } from '../MusicPlayer';
import { playerContext } from '../MusicPlayer/playerContext';

import api from '../../services/Api';

const Content: React.FC = () => {
  const [highlights, setHighlights] = useState<Ihighlights[]>([]);

  useEffect(() => {
    api.get('highlights').then(res => {
      setHighlights(res.data);
    })
  }, [])

  return (
    <>
      <Container>
        <HighlightsContainer>
          <HighlightsGrid>
            {highlights.map((highlightItem) => (
              < Highlight key={highlightItem.id} highlightRef={highlightItem} />
            ))
            }
          </HighlightsGrid>
        </HighlightsContainer>
      </Container>
      <MusicPlayer />
    </>
  );
}

export default Content;