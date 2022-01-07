import styled from "styled-components";

interface IContainer {
    color: string;
}

export const Container = styled.div <IContainer>`
    position: relative;
    width: 100%;
    padding: 30px;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .svg__left--arrow {
        position: absolute;
        left: 30px;
        top: 30px;
        color: #fff;
        height: 40px;
        width: 40px;
        cursor: pointer;
    }

    > h1 {
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 10px;
        margin-bottom: 10px;
    }
`

export const PokemonInformationsContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`
export const PokemonInformationsImg = styled.div `
    width: 180px;
    height: 180px;
    margin-right: 16px;

    > img {
        width: 100%;
        height: 100%;
    }
`

export const PokemonInformationsItems = styled.div `

    > small {
        font-weight: bold;
        font-size: 1.5rem;
        letter-spacing: 2px;
        line-height: 32px;
        color: rgba(23, 23, 27, 0.6);
    }

    > p {
        font-size: 2.188rem;
        line-height: 40px;
        font-weight: bold;
        text-transform: capitalize;
        color: rgb(255, 255, 255);
        margin-bottom: 5px;
    }

    > div {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

`