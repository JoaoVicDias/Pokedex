import styled from "styled-components";

interface IContainer {
    color: string;
}

export const Container = styled.div <IContainer>`
    background-color: ${props => props.color};
    padding: 8px;
    display: flex;
    border-radius: 3px;

    > svg {
        width: 18px;
        height: 18px;
    }

    > span {
        text-transform: capitalize;
        margin-left: 5px;
        color: #fff;
        font-size: 1.2rem;
        line-height: 14px;
    } 
`