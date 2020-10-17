import React from 'react';

import { Grid } from './styles';
import NavBar from '../NavBar';
/* import TopBar from '../TopBar';
import Content from '../Content';
import MusicPlayer from '../MusicPlayer'; */

export default function Layout() {
  return (
    <Grid>
      <NavBar />
      {/*       <TopBar />
      <Content />
      <MusicPlayer /> */}
    </Grid>
  );
}