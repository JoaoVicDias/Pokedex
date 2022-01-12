import React, { useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

import PokemonInitialInformationsContainer from '../../components/PokemonInitialInformationsContainer'
import PokemonSectionItem from '../../components/PokemonSectionItem'
import PokemonAboutSection from '../../components/PokemonAboutSection'
import PokemonTypesItem from '../../components/PokemonTypesItem'
import PokemonStatsSection from '../../components/PokemonStatsSection'
import PokemonEvolutionSection from '../../components/PokemonEvolutionSection'
import Spinner from '../../components/Spinner'

import PokemonTypesColors from '../../Utils/PokemonTypesColors'

import { Container, NavigationSectionContainer, PokemonHardInformationsContainer, WeaknessesContainer } from './styles'

interface IPokemonType {
    type: {
        name: string;
        url: string;
    }
}

interface IPokemonStatus {
    base_stat: number;
    stat: {
        name: string;
    }
}

interface IPokemonState {
    name: string;
    types: IPokemonType[]
    id: number,
    imageUrl: string;
    species: {
        name: string;
    }
    height: number;
    weight: number;
    capture_rate: number;
    base_happiness: number;
    growth_rate: {
        name: string;
    }
    stats: IPokemonStatus[]
    flavor_text_entries: string;
    weaknesses: string[];
    evolution: {
        name: string;
        level?: number;
    }[]
}

interface iPageSectionState {
    about: boolean;
    stats: boolean;
    evolution: boolean;
}

interface IEvolutionParams {
    evolution_details: {
        min_level: number;
        item: {
            name: string;
            url: string;
        }
    }[];
    evolves_to: {}[];
    species: {
        name: string;
        url: string;
    };
}

const Pokemon: React.FC = () => {

    const { pokemonId } = useParams()
    const navigate = useNavigate()

    const [pokemon, setPokemon] = useState<IPokemonState>({
        id: 0,
        name: '',
        imageUrl: '',
        types: [],
        species: {
            name: ''
        },
        height: 0,
        weight: 0,
        base_happiness: 0,
        capture_rate: 0,
        growth_rate: {
            name: ''
        },
        stats: [],
        flavor_text_entries: '',
        weaknesses: [],
        evolution: []
    })
    const [pageSection, setPageSection] = useState<iPageSectionState | any>({
        about: true,
        stats: false,
        evolution: false
    })

    const [loading, setLoading] = useState<boolean>(false)

    const getColorByType = useMemo(() => {
        return PokemonTypesColors.find(type => type.type === pokemon.types[0]?.type.name)?.color
    }, [pokemon.types])

    const onChangeSectionHandler = useCallback((section: string) => {
        setPageSection((prevState: any) => {
            let newState = { ...prevState }

            for (let key in prevState) {
                newState = { ...newState, [key]: key === section }
            }

            return newState
        })
    }, [])

    const checkWichSectionShows = useMemo(() => {
        let sectionActived: string = ''

        for (let key in pageSection) {
            if (pageSection[key]) sectionActived = key
        }

        const informationsAboutSection = [
            {
                title: 'pokédex data',
                items: [
                    { label: 'species', value: pokemon.species.name },
                    { label: 'height', value: `${pokemon.height / 10} m` },
                    { label: 'weight', value: `${pokemon.weight / 10} kg` },
                    {
                        label: 'weaknesses', value: (
                            <WeaknessesContainer>
                                {pokemon.weaknesses.map(type => (<PokemonTypesItem
                                    key={type}
                                    justIcon
                                    typeName={type}
                                />))}
                            </WeaknessesContainer>
                        )
                    },
                ]
            },
            {
                title: 'training',
                items: [
                    { label: 'catch rate', value: pokemon.capture_rate },
                    { label: 'base friendship', value: pokemon.base_happiness },
                    { label: 'growth rate', value: pokemon.growth_rate.name },
                ]
            }
        ]

        switch (sectionActived) {
            case "about":
                return (
                    <PokemonAboutSection
                        description={pokemon.flavor_text_entries}
                        informations={informationsAboutSection}
                        color={getColorByType || '#fff'}
                    />
                )
            case "stats":
                return (
                    <PokemonStatsSection
                        color={getColorByType || '#fff'}
                        informations={pokemon.stats}
                    />
                )
            case "evolution":
                return (
                    <PokemonEvolutionSection
                        onChangeSection={() => onChangeSectionHandler('about')}
                        evolutions={pokemon.evolution}
                    />
                )

            default:
                return null
        }

    }, [getColorByType, pageSection, pokemon, onChangeSectionHandler])

    const onGetEvolutionByObj: any = useCallback((evolutionObj: IEvolutionParams) => {
        let evolutions: any[] = []
        let currentEvolutionInformations: {
            name: string,
            level?: number,
            item?: { name: string, url: string },
        } =
        {
            name: evolutionObj.species.name,
        }

        if (evolutionObj.evolution_details?.length > 0) {
            if (!evolutionObj.evolution_details[0].min_level && evolutionObj.evolution_details[0].item) {
                currentEvolutionInformations.item = evolutionObj.evolution_details[0].item
            }
            currentEvolutionInformations.level = evolutionObj.evolution_details[0].min_level
        }

        evolutions.push(currentEvolutionInformations)

        if (evolutionObj.evolves_to.length > 0) {
            evolutionObj.evolves_to.forEach((evolution, idx) => {
                evolutions = evolutions.concat(onGetEvolutionByObj(evolutionObj.evolves_to[idx]))
            })

        }

        return evolutions

    }, [])

    const onFetchPokemonWeaknessesHandler = useCallback(async (typeUrl: string) => {
        try {
            const res = await axios.get(typeUrl)
            setPokemon(prevState => ({
                ...prevState,
                weaknesses: res.data.damage_relations.double_damage_from.map((type: any) => type.name)
            }))
        } catch (error) {
            setLoading(false)
            console.log(error)
            navigate('/not-found')
        }
    }, [navigate])

    const onFetchPokemonEvolutionHandler = useCallback(async (evolutionUrl: string) => {
        try {
            const res = await axios.get(evolutionUrl)
            setPokemon((prevState: any) => ({
                ...prevState,
                evolution: onGetEvolutionByObj(res.data.chain)
            }))
            setLoading(false)
        } catch (error) {
            setLoading(false)
            navigate('/not-found')
            console.log(error)
        }
    }, [onGetEvolutionByObj, navigate])

    const onFetchPokemonHandler = useCallback(async () => {
        try {
            setLoading(true)
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            setPokemon((prevState: any) => ({
                ...prevState,
                imageUrl: res.data.sprites.other['official-artwork'].front_default,
                id: pokemonId,
                name: res.data.name,
                types: res.data.types,
                species: res.data.species,
                stats: res.data.stats,
                height: res.data.height,
                weight: res.data.weight
            }))

            onFetchPokemonWeaknessesHandler(res.data.types[0].type.url)

        } catch (error) {
            setLoading(false)
            navigate('/not-found')
            console.log(error)
        }
    }, [onFetchPokemonWeaknessesHandler, pokemonId, navigate])

    const onFetchPokemonSpeciesHandler = useCallback(async () => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
            setPokemon(prevState => ({
                ...prevState,
                base_happiness: res.data.base_happiness,
                capture_rate: res.data.capture_rate,
                growth_rate: res.data.growth_rate,
                flavor_text_entries: res.data.flavor_text_entries
                    .find((flavorText: any) => flavorText.language.name === 'en').flavor_text
            }))
            onFetchPokemonEvolutionHandler(res.data.evolution_chain.url)
        } catch (error) {
            setLoading(false)
            navigate('/not-found')
            console.log(error)
        }
    }, [onFetchPokemonEvolutionHandler, pokemonId, navigate])

    const sectionPageInformations = useMemo(() => {
        const pageSectionList = []

        for (let key in pageSection) {
            pageSectionList.push({ isActive: pageSection[key], label: key, onClick: () => onChangeSectionHandler(key) })
        }

        return pageSectionList
    }, [pageSection, onChangeSectionHandler])

    useEffect(() => {
        onFetchPokemonHandler()
    }, [onFetchPokemonHandler])

    useEffect(() => {
        onFetchPokemonSpeciesHandler()
    }, [onFetchPokemonSpeciesHandler])

    if (loading) return <Spinner />

    return (
        <Container color={getColorByType || '#fff'}>
            <PokemonInitialInformationsContainer
                color={getColorByType || '#fff'}
                id={`${'000'.substring(pokemon.id.toString().length)}${pokemon.id}`}
                name={pokemon.name}
                types={pokemon.types}
                imgUrl={pokemon.imageUrl}
            />

            <NavigationSectionContainer color={getColorByType || '#fff'}>
                {
                    sectionPageInformations.map(section => (
                        <PokemonSectionItem key={section.label} {...section} />
                    ))
                }
            </NavigationSectionContainer>

            <PokemonHardInformationsContainer>
                {
                    checkWichSectionShows
                }
            </PokemonHardInformationsContainer>
        </Container>
    )
}

export default Pokemon