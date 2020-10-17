import React from 'react';

import { Container, Header, NavegationButtons, ButtonsContainer } from './styles';

const TopBar: React.FC = () => {
  return (
    <Container>
      <Header>
        <NavegationButtons>
          <a href="/">
            <svg height="24" width="24" viewBox="-1 -1.5 20 20" fill="#fff">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
          </a>
          <a href="/">
            <svg height="24" width="24" viewBox="-3 -1.5 20 20" fill="#fff">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </a>
        </NavegationButtons>
        <ButtonsContainer>
          <button type="button" className="subscribeBTN">
            INSCREVER-SE
          </button>
          <button type="button" className="signinBTN">
            ENTRAR
          </button>
        </ButtonsContainer>
      </Header>
    </Container>
  );
}

export default TopBar;