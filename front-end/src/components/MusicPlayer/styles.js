import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  grid-area: MP;
  flex-shrink: 0;

  color: var(--gray);

  height: 90px;
  width: 100%;
  padding: 0 15px;

  background: var(--quartenary);
`

export const MusicInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: row;
`
export const MusicNAContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 10px;

  a{
    width: fit-content;
    &:hover{
      text-decoration: underline;
      text-overflow: clip;
      overflow: hidden;
    }
  }
`
export const MusicName = styled.a`
  font-family: Arial, sans-serief;
  text-decoration: none;
  color: var(--white);
`
export const MusicAuthor = styled.a`
  font-family: Arial, sans-serief;
  text-decoration: none;
  color: var(--gray);
  font-size: 12px;
`
export const LikeMusicContainer = styled.div`
  padding-left: 10px;
  button{
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--white);
    background: none;

    cursor: pointer;

    &:hover{
      transform: scale(1.2);
    }
  }
`

export const PlayerControls = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const PlayerButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;

button{
  display: flex;
  align-items: center;
  justify-content: center;

  height: 32px;
  width: 32px;
  margin: 0 5px;

  color: var(--gray);
  background: none;
  
  cursor: pointer;
  &:hover{
    color: var(--white);
  }
}

`
export const PlayerTimelineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;

  div{
    display: flex;
    flex-shrink: 0;
    justify-content: center;

    height: 16px;
    width: 40px;

    font-family: Arial, sans-serif;
    font-size: 12px;
  }
  .MusicTime{
    padding: 8px 0;

    .MuiSlider-root{
      height: 5px;
    }
    .MuiSlider-rail{
      height: 5px;
      border-radius: 5px;
      background-color: rgba(255,255,255,0.3);
    }
    .MuiSlider-track{
      height: 5px;
      border-radius: 5px;
      background-color: rgba(255,255,255,0.5);
    }
    .MuiSlider-thumb{
      opacity: 0;
      background-color: var(--white);
    }

    &:hover{
      .MuiSlider-track{
        height: 5px;
        border-radius: 5px;
        background-color: var(--play);
      }
      .MuiSlider-thumb{
        opacity: 1;
        background-color: var(--white);
      }
    }
  }
`

export const PlayerOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;

  a{
    margin: 0 5px;
    &:hover{
      color: var(--white);
    }
  }
`
export const VolumeContainer = styled.div`
  display: flex;
  align-items: baseline;

  width: 125px;
  margin-right: 10px;

  .MusicVolume{
    padding: 8px 0;

    .MuiSlider-root{
      height: 5px;
    }
    .MuiSlider-rail{
      height: 5px;
      border-radius: 5px;
      background-color: rgba(255,255,255,0.3);
    }
    .MuiSlider-track{
      height: 5px;
      border-radius: 5px;
      background-color: rgba(255,255,255,0.5);
    }
    .MuiSlider-thumb{
      opacity: 0;
      background-color: var(--white);
    }

    &:hover{
      .MuiSlider-track{
        height: 5px;
        border-radius: 5px;
        background-color: var(--play);
      }
      .MuiSlider-thumb{
        opacity: 1;
        background-color: var(--white);
      }
    }
  }
`