import styled from "styled-components";

export const Container = styled.nav`
  grid-area: SB;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  background-color: var(--secondary);
  max-height: 100vh;

`;

export const Logo = styled.div`
  padding-top: 24px;
  max-width: 232px;
  a{
    display: flex;
    padding-left: 24px;
    margin-bottom: 18px;
    height: 45px;
    svg{
      width: 131px;
      height: 40px;
    }
  }
`
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-top: 24px;

  h3{
    margin: 0 24px;
    margin-bottom: 12px;

    font-size: 12px;
    color: var(--gray);
  }

  hr{
    margin: 10px 0;
    width: 80%;
    align-self: center;
    border-color: rgba(255,255,255, 0.2);
  }
`

export const PrivacyContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 24px;
  margin-bottom: 25px;

  font-size: 1px !important;

  a{
    font-size: 11px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.01em;
    text-transform: none;
    color: var(--gray);
    &:hover {
      color: var(--white);
    }
  }
`;