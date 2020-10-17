import React, { useContext } from 'react';
import { baseURL } from '../../services/Api';

import { PlayArrow } from '@material-ui/icons';
import { Background, Container, InfoContainer, PlayButtonContainer, PlayButton } from './styles';
import { playerContext, controllerContext } from '../MusicPlayer/playerContext';
interface IPlaylist {
  id: string;
  name: string;
  description: string;
  avatar: string;
  musics: string[];
  genre: string;
  private: boolean;
}
interface Props {
  playlist: IPlaylist;
}

function handleShowPlaylist() {
  alert("Opening Playlist!");
}

function handlePlay(e: any) {
  e.stopPropagation();
}


const PlaylistCard: React.FC<Props> = ({ playlist }) => {
  const { isPlaying, setIsPlaying } = useContext<any>(playerContext);

  return (
    <Background onClick={handleShowPlaylist}>
      <Container>
        <img
          aria-hidden="false"
          draggable="false"
          loading="lazy"
          src={playlist.avatar}
          alt="" />
        <InfoContainer>
          <h3>{playlist.name}</h3>
          <span>{playlist.description}</span>
        </InfoContainer>
      </Container>
      <PlayButtonContainer className="playBTN">
        <PlayButton onClick={(e) => { handlePlay(e); setIsPlaying(!isPlaying) }}>
          <PlayArrow />
        </PlayButton>
      </PlayButtonContainer>
    </Background>
  );
}

export default PlaylistCard;