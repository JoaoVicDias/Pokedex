import styled from "styled-components";

interface IContainer {
    color: string;
}

export const Container = styled.div <IContainer>`
    background-color: ${props => props.color};
    padding: 8px;
    display: flex;
    border-radius: 3px;
    display: flex;
    align-items: center;

    @media(max-width: 380px) {
        padding: 5px;
    }

    > img {
        width: 18px;
        height: 18px;

        @media(max-width: 1023px) {
            width: 12px;
            height: 12px;
        }

        @media(max-width: 380px) {
            width: 10px;
            height: 10px;
        }
    }

    > span {
        text-transform: capitalize;
        margin-left: 5px;
        color: #fff;
        font-size: 1.2rem;
        line-height: 14px;

        @media(max-width: 1023px) {
            font-size: 1rem;
        }

        @media(max-width: 380px) {
            font-size: 0.9rem;
            line-height: initial;
        }
    } 
`