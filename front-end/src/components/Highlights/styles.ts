import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1955px;
`

export const Category = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  
  margin-bottom: 16px;

  h1{
    a{
      color: var(--white);
      font-size: 24px;
      letter-spacing: 0;
    }
  }
  a{
    color: var(--gray);
    font-size: 12px;
  } 
`

export const PlaylistContainer = styled.div`
  display: grid;
  grid-auto-rows: 0;
  grid-template-rows: 1fr;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill,minmax(180px,1fr));

  overflow-x: hidden;
  overflow-y: hidden;
`

export const PlaylistsCard = styled.div`
  display: flex;
  flex-direction: row;
`
