import styled from 'styled-components';

export const Container = styled.div`
  grid-area: TB;
  height: 60px;
  z-index: 2;
`

export const Header = styled.header`
  display: flex;
  position: relative;
  padding: 16px;

  align-items: center;
  justify-content: space-between;

  background-color: var(--tertiary);

  width: 100%;
  max-width: calc(100vw - 232px);
  height: 60px;

  a{
    display:flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    padding: 5px;

    background-color: var(--secondary);
    border-radius: 25px;
  }
`

export const NavegationButtons = styled.div`
  display: flex;
  flex-direction: row;

  a{
    margin: 0 8px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    
    line-height: 22px;

    padding: 8px 34px;

    color: var(--white);
    border-radius: 20px;
    &:hover{
      transform: scale(1.06);
    }
  }

  .subscribeBTN{
    background-color: transparent;
  }

  .signinBTN{
    color: var(--secondary);
  }
`