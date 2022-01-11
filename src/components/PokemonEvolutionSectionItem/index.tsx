import React, { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { ReactComponent as PokeballSvg } from '../../assets/pokeball.svg'

import { PokemonContainer } from './styles'

interface IPokemonEvolutionSectionItemProps {
    name: string;
    onClick: () => void;
}

interface IPokemonState {
    imageUrl: string;
    id: number;
}

const PokemonEvolutionSectionItem: React.FC<IPokemonEvolutionSectionItemProps> = ({ name, onClick }) => {

    const navigate = useNavigate()

    const [pokemon, setPokemon] = useState<IPokemonState>({ id: 0, imageUrl: '' })
    const [loading, setLoading] = useState<boolean>(false)

    const onFetchSpeciesPokemon = useCallback(async () => {
        try {
            setLoading(true)
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            setPokemon({
                id: res.data.id,
                imageUrl: res.data.sprites?.other['official-artwork'].front_default
            })
            setLoading(false)
        } catch (error) {
            console.log(error)
            navigate('/not-found')
        }
    }, [name, navigate])

    useEffect(() => {
        onFetchSpeciesPokemon()
    }, [onFetchSpeciesPokemon])

    return (
        <PokemonContainer>
            {
                loading
                    ? <span> carregando ...</span>

                    : (
                        <>
                            <Link to={`/pokemon/${pokemon.id}`} onClick={onClick}>
                                <PokeballSvg />
                                <img src={pokemon.imageUrl} alt={name} />
                            </Link>
                            <span>#{`${'000'.substring(pokemon.id.toString().length)}${pokemon.id}`}</span>
                            <strong>{name}</strong>
                        </>
                    )
            }

        </PokemonContainer >
    )
}

export default PokemonEvolutionSectionItem