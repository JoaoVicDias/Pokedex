import styled from "styled-components";

export const Container = styled.ul `
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 80px;

    @media(max-width: 1023px) {
        gap: 60px 30px;
    }

    @media(max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }
`