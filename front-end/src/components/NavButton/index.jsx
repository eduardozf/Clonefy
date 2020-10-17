import React from 'react';

import { Container, NavBtn, IconBtn } from './styles';


function NavButton({ children, Label, Active, hasIconBg, IconColor, IconBgColor }) {
  return (
    <Container Active={Active}>
      <NavBtn href="/">
        <IconBtn hasIconBg={hasIconBg} IconColor={IconColor} IconBgColor={IconBgColor}>
          {children}
        </IconBtn>
        <span>{Label}</span>
      </NavBtn>
    </Container>
  );
}

export default NavButton;