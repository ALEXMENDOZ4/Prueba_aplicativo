import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        font-family: "Open Sans", sans-serif;
    }

    button{
        font-family: "Open Sans";
        font-size: 16px;
    }
    
    input{
        font-family: "Open Sans";
        font-size: 16px;
    }
`;