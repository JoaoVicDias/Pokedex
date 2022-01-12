import styled from "styled-components";

interface IContainer {
    color: string;
}

export const Container = styled.li <IContainer>`
    background-color: ${props => props.color};
    box-shadow: rgb(0 0 0 / 30%) 1px 3px 12px 0px;
    border-radius: 6px;
    /* transition: all 0.3s ease-in-out; */
    animation-name: InitAnimation;
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: unset;

    :active,
    :hover {
        .img__pokemon {
            transform: scale(1.09);
        }
    }


    > a {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;


        @media(max-width: 380px) {
            padding: 10px;
        }
    }

    @keyframes InitAnimation {
        from {
            transform: translateY(-10%);
            opacity: 0;
        }   

        to {
            transform: translateY(0);
            opacity: 1;
        }
            
    }
`

export const LeftSideContainer = styled.div`

`

export const IdPokemon = styled.span`
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: 2px;
    color: rgba(23, 23, 27, 0.6);
    
    @media(max-width: 380px) {
        font-size: 1rem;
    }
`

export const NamePokemon = styled.h4`
    font-size: 2.5rem;
    color: #fff;
    line-height: 45px;
    text-transform: capitalize;
    margin-bottom: 10px;

    @media(max-width: 1023px) {
        font-size: 2rem;
    }

    @media(max-width: 380px) {
        font-size: 1.4rem;
        line-height: initial;
    }

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
        
        @media(max-width: 1023px) {
            height: 80px;
            width: 80px;
        }

        @media(max-width: 380px) {
            height: 50px;
            width: 50px;
        }

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

    @media(max-width: 1023px) {
        height: 150px;
        width: 150px;
        top: -20px;
        right: 0;
    }

    @media(max-width: 380px) {
        height: 100px;
        width: 100px;
        top: -5px;
        right: 0;
    }
`