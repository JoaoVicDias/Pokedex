import styled from "styled-components";

export const Container = styled.div `
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    > span {
        text-transform: uppercase;
        color: #eb2127;
        font-size: 2rem;
        letter-spacing: 10px;
        font-weight: 700;
        margin-bottom: 40px;
    }

    > h1 {
        display: flex;
        align-items: center;
        font-size: 6rem;
        margin-bottom: 20px;
        > svg {
            width: 150px;
            height: 150px;
            margin: 0 10px;
        }
    }

    > strong {
        font-size: 2rem;
        letter-spacing: 5px;
        font-weight: 700;
        margin-bottom: 40px;
    }

    > a {
        border: 2px solid rgb(242,242,242);
        padding: 6px 20px;
        text-transform: uppercase;
        font-size: 1.2rem;
        color: rgba(0,0,0, 0.7);
    }
`