import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    font-family: NotoSansKR-Light;
  }

  @font-face {
    font-family: "NotoSansKR-Light";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/NotoSansKR-Light.otf") format("truetype");
  }
`;

export default GlobalStyle;
