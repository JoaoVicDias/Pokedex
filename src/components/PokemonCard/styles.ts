import styled from "styled-components";

interface IContainer {
    color: string;
}

export const Container = styled.li <IContainer>`
    padding: 20px;
    background-color: ${props => props.color};
    box-shadow: rgb(0 0 0 / 30%) 1px 3px 12px 0px;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`

export const LeftSideContainer = styled.div`

`

export const IdPokemon = styled.span`
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: 2px;
    color: rgba(23, 23, 27, 0.6);`

export const NamePokemon = styled.h4`
    font-size: 2.5rem;
    color: #fff;
    line-height: 45px;
    text-transform: capitalize;
    margin-bottom: 10px;
`

export const TypesContainer = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`

export const RightSideContainer = styled.div`
    display: flex;
    align-items: center;

    .svg__pokeball {
        height: 114px;
        width: 114px;
        
        > path {
            fill: rgba(255, 255, 255, 0.2);
        }
    }
`
export const PokemonImg = styled.img`
    position: absolute;
    height: 180px;
    width: 180px;
    right: 20px;
    top: -30px;
    filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.4));
`