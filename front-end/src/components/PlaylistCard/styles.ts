import styled from 'styled-components';

export const Background = styled.div`
  flex: 1;
  position: relative;
  padding: 16px;

  width: 100%;
  height: fit-content;
  background: var(--quinary);
  border-radius: 4px;

  isolation: isolate;
  transition: background .2s ease;

  cursor: pointer;

  &:hover{
    background: var(--quartenary);
  }
  &:hover .playBTN{
    opacity: 1;
  }
`

export const Container = styled.div` 
  display: flex;
  flex: 1;
  flex-direction: column;

  height: 100%;

  user-select: none;
  
  img{
    width: 100%;
    position: relative;
    margin-bottom: 16px;
    border-radius: 2px;

    background-color: var(--secondary);
  }
`

export const InfoContainer = styled.div`
  min-height: 62px;

  h3{
    color: var(--white);
    user-select: none;
    max-width: 100%;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    z-index: 1;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: normal;
    text-transform: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  span{
    display: -webkit-box;
    color: var(--gray);

    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: pre-wrap;

    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 4px;
    white-space: normal;

  }
`

export const PlayButtonContainer = styled.div`
  bottom: 106px;
  box-shadow: 0 8px 8px rgba(0,0,0,.3);
  z-index: 2;
  border-radius: 500px;
  outline: none;
  right: 24px;
  position: absolute;
  opacity: 0;
  pointer-events: auto;
  
`

export const PlayButton = styled.button`
  border: 0;
  border-radius: 500px;
  transition: transform 33ms cubic-bezier(.3,0,0,1),-webkit-transform 33ms cubic-bezier(.3,0,0,1);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: 40px;
  position: relative;
  z-index: 1;
  color: var(--white);
  background-color: var(--play);
  &:hover{
    transform: scale(1.1);
  }
`

