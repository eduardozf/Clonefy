import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: scroll;
  background-color: var(--primary);

  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.5);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255,255,255,0.3); 
  }
`

export const HighlightsContainer = styled.span`
  display: block;
`
export const HighlightsGrid = styled.div`

  padding: 0 32px;
  padding-top: 16px;

  display: grid;
  grid-gap: 32px;
  padding-top: 16px;
`