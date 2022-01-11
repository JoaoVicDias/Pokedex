import styled from "styled-components";

export const Container = styled.div `
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > svg {
        width: 300px;
        height: 300px;
        margin-bottom: 20px;
    }

    > a {
        border: 2px solid rgb(242,242,242);
        padding: 6px 20px;
        text-transform: uppercase;
        font-size: 1.2rem;
        color: rgba(0,0,0, 0.7);
        margin-top: 20px;
    }
`