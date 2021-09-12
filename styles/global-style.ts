import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    font-family: Noto Sans KR;
  }

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400&display=swap');
`;

export default GlobalStyle;
