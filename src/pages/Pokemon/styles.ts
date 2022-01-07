import styled from "styled-components";

interface IContainer {
    color: string;
}

interface INavigationSectionContainer {
    color: string;
}

export const Container = styled.div <IContainer>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.color};
`

export const NavigationSectionContainer = styled.ul<INavigationSectionContainer> `
    width: 100%;
    padding: 5px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    background-color: ${props => props.color};
`

export const PokemonHardInformationsContainer = styled.div `
    display: flex;
    width: 100%;
    flex: 1;
    background-color: #fff;
    padding: 20px;
    border-radius: 16px 16px 0 0;
`

export const WeaknessesContainer = styled.div `
    display: flex;
    gap: 5px;
    align-items: center;
    flex-wrap: wrap;
`