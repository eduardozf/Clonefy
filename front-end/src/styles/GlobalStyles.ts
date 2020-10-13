import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: "Circular Spotify Tx T Black", sans-serif;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: .015em;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    --primary: #121212;
    --secondary: #040404;
    --tertiary: #090909;
    --quartenary: #272727;
    --quinary: #181818;

    --white: #fff;
    --gray: #bbb;

    --play: #1DB954;
  }
  
`