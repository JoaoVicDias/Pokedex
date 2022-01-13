import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'

import PokemonTypesItem from "../PokemonTypesItem";

import { ReactComponent as PokeballSvg } from '../../assets/pokeball.svg'

import PokemonTypesColors from "../../Utils/PokemonTypesColors";

import {
    Container,
    LeftSideContainer,
    IdPokemon,
    NamePokemon,
    TypesContainer,
    RightSideContainer,
    PokemonImg
} from './styles'

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

    const navigate = useNavigate()

    const isMounted = useRef(false)

    const [pokemonInformations, setPokemonInformations] = useState<IPokemonInformations>({
        id: '',
        name: '',
        types: [],
        defaultImg: ''
    })
    const [loading, setLoading] = useState<boolean>(false)

    const colorShouldUser = useMemo(() => (
        PokemonTypesColors.find(type => type.type === pokemonInformations.types[0]?.type.name)?.color
    )
        , [pokemonInformations])

    const onFetchPokemonInformationsHandler = useCallback(async () => {
        try {
            setLoading(true)
            const res = await axios.get(pokemonUrl)
            if (!isMounted.current) return
            setPokemonInformations({
                id: res.data.id,
                name: res.data.name,
                types: res.data.types,
                defaultImg: res.data.sprites?.other['official-artwork'].front_default
            })
            setLoading(false)

        } catch (e) {
            setLoading(false)
            navigate('/something-wrong')
            console.log(e)
        }
    }, [pokemonUrl, isMounted, navigate])

    useEffect(() => {
        isMounted.current = true
        onFetchPokemonInformationsHandler()

        return () => { isMounted.current = false };
    }, [onFetchPokemonInformationsHandler])

    return (
        <Container color={colorShouldUser || '#fff'}>
            <Link to={`/pokemon/${pokemonInformations.id}`}>
                <LeftSideContainer>
                    <IdPokemon>#{pokemonInformations.id}</IdPokemon>
                    <NamePokemon> {pokemonInformations.name} </NamePokemon>
                    <TypesContainer>
                        {
                            pokemonInformations.types.map((type) => (
                                <PokemonTypesItem key={type.type.name} typeName={type.type.name} />
                            ))
                        }
                    </TypesContainer>
                </LeftSideContainer>
                <RightSideContainer loadingProp={loading}>
                    <PokeballSvg className="svg__pokeball" />
                </RightSideContainer>
                {
                    !loading && <PokemonImg
                        className="img__pokemon"
                        src={pokemonInformations.defaultImg}
                        alt={pokemonInformations.name}
                        loading="lazy"
                    />
                }
            </Link>
        </Container>
    )
}

export default PokemonCard