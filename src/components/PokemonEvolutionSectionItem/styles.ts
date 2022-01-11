import styled from "styled-components";

export const PokemonContainer = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;

    > a {
        position: relative;
        display: flex;
        width: 120px;
        height: 120px;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;

        > svg {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            height: inherit;
            width: inherit;
        }

        > img {
            width: 100px;
            height: 100px;
            z-index: 2;
        }
    }

    > span {
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 22px;
        color: rgb(116, 116, 118);
    }

    > strong {
        text-transform: capitalize;
        font-size: 1.438rem;
        line-height: 26px;
        color: rgb(23, 23, 27);
        font-weight: 700;
    }
`