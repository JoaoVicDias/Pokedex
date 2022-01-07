import { createGlobalStyle } from 'styled-components' 

export default createGlobalStyle `
    #root, html, body {
        min-height: 100vh;
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

    ul {
        list-style: none;
    }
`