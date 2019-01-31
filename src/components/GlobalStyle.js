import { createGlobalStyle } from 'styled-components';
import global from '../global';

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        height: 100%;
        margin: 0;
        background: linear-gradient(180deg,#fff,#f5f5f5);
        background-repeat: no-repeat;
        background-attachment: fixed;
        font-family: ${global.style.fontFamily};
    }
`;

export default GlobalStyle;
