import styled from "styled-components";

export const Container = styled.div `
    min-height: 100vh;
    width: 100%;
    background-color: rgb(242, 242, 242);
    padding: 30px 60px;

    @media(max-width: 767px) {
        padding: 30px 20px;
    }
`