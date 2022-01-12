import styled from "styled-components";

export const LevelContainer = styled.div `
    display: flex;
    flex-direction: column;

    .svg__desktop {
        display: block;
    }

    .svg__mobile {
        display: none;
    }

    @media(max-width:767px) {
        .svg__desktop {
            display: none;
        }

        .svg__mobile {
            display: block;
        }
    }

    > svg {
        color: rgba(0, 0, 0, 0.09);
        width: 80px;
        height: 80px;
    }

    > span {
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 22px;
        color: rgb(116, 116, 118);
    }
`

export const ItemEvolutionContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
        width: 80px;
        height: 80px;
    }

    > span {
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 22px;
        color: rgb(116, 116, 118);
    }
`
