import React from 'react';

import { Grid } from './styles';
import NavBar from '../NavBar';
import TopBar from '../TopBar';
import Content from '../Content';
import MusicPlayer from '../MusicPlayer';
import PlayerProvider from '../../context/Player';

export default function Layout() {
  return (
    <Grid>
      <NavBar />
      <TopBar />
      <PlayerProvider>
        <Content />
        <MusicPlayer />
      </PlayerProvider>
    </Grid>
  );
}
