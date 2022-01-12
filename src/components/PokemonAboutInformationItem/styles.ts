import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    > strong {
        font-size: 1.125rem;
        line-height: 20px;
        font-weight: 500;
        color: rgb(23, 23, 27);
        text-transform: capitalize;
    }

    > span {
        font-size: 1.25rem;
        line-height: 21px;
        color: rgb(116, 116, 118);
    }
`