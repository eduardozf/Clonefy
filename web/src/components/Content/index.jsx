import React, { useState, useEffect } from 'react';

import { Container, HighlightsContainer, HighlightsGrid } from './styles';
import Highlight from '../Highlights';

import api from '../../services/Api';

function Content() {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    api.get('highlights').then(res => {
      setHighlights(res.data);
    })
  }, [])

  return (
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
  );
}

export default Content;