import styled from 'styled-components';

import { Props } from './index';

export const Container = styled.div <Props>`
  padding: 0 8px;

  a {
    color: ${props => props.Active ? 'var(--white)' : 'var(--gray)'};
    background-color: ${props => props.Active ? 'var(--quartenary)' : 'var(--secondary)'};
  }
`

export const NavBtn = styled.a`
  display: flex;
  align-items: center;

  padding: 0 16px;
  border-radius: 4px;
  height: 40px;

  &:hover{
    color: var(--white);
    text-decoration: none;
  }
`

export const IconBtn = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 32px;
  height: 32px;
  margin-right: 16px;

  background: ${props => props.hasIconBg ? props.IconBgColor : 'none'};

  svg{
    margin: 2px;
    color: ${props => props.hasIconBg ? props.IconColor : ''};
  }
`