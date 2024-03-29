import styled from 'styled-components';

/* 
 * SB - Side Bar
 * TP - Top Bar
 * MN - Main 
*/

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 232px auto;
  grid-template-rows: 60px auto 90px;

  grid-template-areas:
  'SB TB'
  'SB MN'
  'MP MP';

  height: 100vh;
`;
