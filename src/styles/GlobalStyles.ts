import { createGlobalStyle } from 'styled-components' 

export default createGlobalStyle `
    #root, html, body {
        height: 100vh;
        width: 100vw;
    } 

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Outfit', sans-serif;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: inherit;
    }

    button {
        cursor: pointer;
    }
`