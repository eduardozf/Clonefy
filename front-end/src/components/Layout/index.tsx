import React from 'react';

import { Grid } from './styles';
import NavBar from '../NavBar';
import TopBar from '../TopBar';
import Content from '../Content';

const Layout: React.FC = () => {
  return (
    <Grid>
      <NavBar />
      <TopBar />
      <Content />
    </Grid>
  );
}

export default Layout;