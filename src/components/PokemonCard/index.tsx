import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import PokemonTypesItem from "../PokemonTypesItem";

import { ReactComponent as PokeballSvg } from '../../assets/pokeball.svg'

import { Container, LeftSideContainer, IdPokemon, NamePokemon, TypesContainer, RightSideContainer, PokemonImg } from './styles'

interface PokemonCardProps {
    pokemonUrl: string;
}

interface IPokemonInformations {
    id: string;
    name: string;
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        }
    }[]
    defaultImg: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonUrl }) => {

    const [pokemonInformations, setPokemonInformations] = useState<IPokemonInformations>({
        id: '',
        name: '',
        types: [],
        defaultImg: ''
    })

    const checkWichColorHandler = useMemo(() => {
        switch (pokemonInformations.types[0]?.type.name) {
            case 'bug':
                return {
                    color: '#8BD674'
                }
            case 'dark':
                return {
                    color: '#6F6E78'
                }
            case 'dragon':
                return {
                    color: '#7383B9'
                }
            case 'electric':
                return {
                    color: '#F2CB55'
                }
            case 'fairy':
                return {
                    color: '#EBA8C3'
                }
            case 'fighting':
                return {
                    color: '#EB4971'
                }
            case 'fire':
                return {
                    color: '#FFA756'
                }
            case 'flying':
                return {
                    color: '#83A2E3'
                }
            case 'ghost':
                return {
                    color: '#8571BE'
                }
            case 'grass':
                return {
                    color: '#8BBE8A'
                }
            case 'ground':
                return {
                    color: '#F78551'
                }
            case 'ice':
                return {
                    color: '#91D8DF'
                }
            case 'normal':
                return {
                    color: '#B5B9C4'
                }
            case 'poison':
                return {
                    color: '#9F6E97'
                }
            case 'psychic':
                return {
                    color: '#FF6568'
                }
            case 'rock':
                return {
                    color: '#D4C294'
                }
            case 'steel':
                return {
                    color: '#4C91B2'
                }
            case 'water':
                return {
                    color: '#58ABF6'
                }

            default:
                return {
                    color: '#fff'
                }
        }
    }, [pokemonInformations])

    const getPokemonInformationsHandler = useCallback(async () => {
        try {
            const res = await axios.get(pokemonUrl)
            setPokemonInformations({
                id: res.data.id,
                name: res.data.name,
                types: res.data.types,
                defaultImg: res.data.sprites?.other['official-artwork'].front_default
            })
        } catch (e) {
            console.log(e)
        }
    }, [pokemonUrl])

    useEffect(() => {
        getPokemonInformationsHandler()
    }, [getPokemonInformationsHandler])

    return (
        <Container color={checkWichColorHandler.color}>
            <LeftSideContainer>
                <IdPokemon>#{pokemonInformations.id}</IdPokemon>
                <NamePokemon> {pokemonInformations.name} </NamePokemon>
                <TypesContainer>
                    {
                        pokemonInformations.types.map((type) => (
                            <PokemonTypesItem typeName={type.type.name} />
                        ))
                    }
                </TypesContainer>
            </LeftSideContainer>
            <RightSideContainer>
                <PokeballSvg className="svg__pokeball" />
            </RightSideContainer>
            <PokemonImg src={pokemonInformations.defaultImg} alt={pokemonInformations.name}  />
        </Container>
    )
}

export default PokemonCard