import React, { useCallback, useEffect, useState, useMemo } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import HomeHeader from '../../components/HomeHeader'
import Filter from '../../components/Filter'
import ListPokemons from '../../components/ListPokemons'
import Spinner from '../../components/Spinner';
import NotFoundMessage from '../../components/NotFoundMessage';

import { Container } from './styles'

interface IPokemons {
    name: string;
    url: string;
}

interface IPaginateState {
    start: number;
    end: number;
}

interface IFilterState {
    name: string;
}

const Home: React.FC = () => {

    let filterTimeOut: NodeJS.Timeout
    const perPage: number = 15

    const [paginate, setPaginate] = useState<IPaginateState>({ start: 0, end: perPage - 1 })
    const [filter, setFilter] = useState<IFilterState | any>({ name: '' })
    const [totalItems, setTotalItems] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(true)
    const [isEmpty, setIsEmpty] = useState<boolean>(false)
    const [data, setData] = useState<IPokemons[]>([])
    const [filteredData, setFilteredData] = useState<IPokemons[]>([])
    const [pokemons, setPokemons] = useState<IPokemons[]>([])

    const navigate = useNavigate()

    const checkHasMoreItems = useMemo(() => filteredData.length >= paginate.end, [filteredData.length, paginate.end])

    const filterConfigMemo = useMemo(() => [
        {
            filterName: 'name',
            placeholder: 'Qual Pokémon você está procurando ?',
            filterType: 'text'
        }
    ], [])

    const onNextPageHandler = useCallback(() => (
        setPaginate(prevState => ({ ...prevState, end: prevState.end + perPage }))
    ), [])

    const onAddItemsToNextPageHandler = useCallback(() => {
        let pokemonsToShow: IPokemons[] = []

        pokemonsToShow = filteredData.filter((_, index) => index >= paginate.start && index <= paginate.end)

        return setPokemons(pokemonsToShow)

    }, [filteredData, paginate])

    const onSetFilterHandler = useCallback((event, filterName: string) => {
        setFilter((prevState: IFilterState) => ({ ...prevState, [filterName]: event.target.value }))
    }, [])

    const onFetchCountPokemonsHandler = useCallback(async () => {
        try {
            setLoading(true)

            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
            setTotalItems(res.data.count)
        } catch (error) {
            console.log(error)
            navigate('/something-wrong')
        }
    }, [navigate])

    const onFetchPokemonsHandler = useCallback(async () => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${totalItems}`)
            setData(res.data.results)

            if (res.data.results.length === 0) setIsEmpty(true)

            setLoading(false)
        } catch (e) {
            setLoading(false)
            navigate('/something-wrong')
            console.log(e)
        }
    }, [totalItems, navigate])

    const onFilterHandler = useCallback(() => {
        clearTimeout(filterTimeOut)

        // eslint-disable-next-line react-hooks/exhaustive-deps
        filterTimeOut = setTimeout(() => {
            const filteredPokemons = Object.entries(filter).reduce((item, [key, value]) => {
                return item.filter((pokemon: IPokemons | any) => pokemon[key].includes(value))
            }, data)

            setIsEmpty(!loading && filteredPokemons.length === 0)
            setFilteredData(filteredPokemons)
            setPokemons([])
            setPaginate({ start: 0, end: perPage - 1 })

        }, 100)

    }, [filter, data])

    useEffect(() => {
        onFetchCountPokemonsHandler()
    }, [onFetchCountPokemonsHandler])

    useEffect(() => {
        if (totalItems > 0) {
            onFetchPokemonsHandler()
        }
    }, [onFetchPokemonsHandler, totalItems])

    useEffect(() => {
        onFilterHandler()
    }, [onFilterHandler])

    useEffect(() => {
        onAddItemsToNextPageHandler()
    }, [onAddItemsToNextPageHandler])

    return (
        <Container>
            <HomeHeader />
            <Filter filterConfig={filterConfigMemo} onActionFilter={onSetFilterHandler} />
            {loading && <Spinner />}
            {isEmpty && !loading ? <NotFoundMessage />
                : (
                    <InfiniteScroll
                        dataLength={pokemons.length}
                        next={onNextPageHandler}
                        hasMore={checkHasMoreItems}
                        loader={<Spinner />}
                        style={{ overflow: 'none' }}
                    >
                        <ListPokemons pokemons={pokemons} />
                    </InfiniteScroll>
                )
            }


        </Container>
    )
}

export default Home