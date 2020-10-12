import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--primary);

  padding: 0 32px;
  padding-top: 16px;

  overflow-y: scroll;
  background-attachment: scroll!important;
  scroll-behavior: auto!important;

  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background-color: hsla(0,0%,100%,.3);
  }

`