import styled from "styled-components";

interface IContainer {
    isActive: boolean;
}

export const Container = styled.li <IContainer> `
    font-size: 1.6rem;
    color: rgba(255,255,255,${props => props.isActive ? '1' : '0.5'});
    cursor: pointer;
    padding: 5px;
    text-transform: capitalize;
    border-bottom: ${props => props.isActive ? '2px solid #fff' : 'none'};
`