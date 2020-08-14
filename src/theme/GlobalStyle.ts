import { createGlobalStyle } from "@xstyled/styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle: any = createGlobalStyle`
    ${normalize};
    
    * {
        user-select: none;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body{
        background-color: bg;
        color: text;
    }

    div#root{
        width: 100%;
        min-height: 100vh;
        display: grid;
        
    }
`;

export default GlobalStyle;
