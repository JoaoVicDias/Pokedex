import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px 0;
    flex-wrap: wrap;
    gap: 20px;

    @media(max-width:767px) {
        flex-direction: column;
        gap: 50px;
    }
`