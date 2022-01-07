import React, { useCallback, useEffect, useState, useMemo } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios'

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
    const perPage = 15
    const [paginate, setPaginate] = useState<IPaginateState>({ start: 0, end: perPage - 1 })
    const [filter, setFilter] = useState<IFilterState | any>({ name: '' })
    const [totalItems, setTotalItems] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(true)
    const [isEmpty, setIsEmpty] = useState<boolean>(false)
    const [data, setData] = useState<IPokemons[]>([])
    const [filteredData, setFilteredData] = useState<IPokemons[]>([])
    const [pokemons, setPokemons] = useState<IPokemons[]>([])

    const checkHasMoreItems = useMemo(() => filteredData.length >= paginate.end, [filteredData.length, paginate.end])

    const filterConfigMemo = useMemo(() => [
        {
            filterName: 'name',
            placeholder: 'Qual Pokémon você está procurando ?',
            filterType: 'text'
        }
    ], [])

    const onGetCountPokemonsHandler = useCallback(async () => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
            setTotalItems(res.data.count)
        } catch (error) {
            console.log(error)
        }
    }, [])

    const onPaginateHandle = useCallback(() => {
        setPaginate(prevState => ({ start: prevState.start, end: prevState.end + perPage }))
    }, [])

    const onNextPageHandler = useCallback(() => {
        setPokemons(() => {
            let newData
            newData = filteredData.filter((item, index) => index >= paginate.start && index <= paginate.end)
            return newData
        })

    }, [filteredData, paginate.end, paginate.start])

    const onGetPokemonsHandler = useCallback(async () => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${totalItems}`)
            setData(res.data.results)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }, [totalItems])

    const onSetFilterHandler = useCallback((event, filterName: string) => {
        setFilter((prevState: any) => ({ ...prevState, [filterName]: event.target.value }))
    }, [])

    const onFilterHandler = useCallback(() => {
        clearTimeout(filterTimeOut)

        // eslint-disable-next-line react-hooks/exhaustive-deps
        filterTimeOut = setTimeout(() => {
            const newData = Object.entries(filter).reduce((item, [key, value]) => {
                return item.filter((pokemon: any) => pokemon[key].includes(value))
            }, data)

            if (!loading && newData.length === 0) {
                setIsEmpty(true)
            } else {
                setIsEmpty(false)
            }

            setFilteredData(newData)
            setPokemons([])
            setPaginate({ start: 0, end: perPage - 1 })

        }, 200)

    }, [filter, data])

    useEffect(() => {
        onFilterHandler()
    }, [onFilterHandler])

    useEffect(() => {
        onGetCountPokemonsHandler()
    }, [onGetCountPokemonsHandler])

    useEffect(() => {
        if (totalItems > 0) {
            onGetPokemonsHandler()
        }
    }, [onGetPokemonsHandler, totalItems])

    useEffect(() => {
        onNextPageHandler()
    }, [onNextPageHandler])

    return (
        <Container>
            <HomeHeader />
            <Filter filterConfig={filterConfigMemo} onActionFilter={onSetFilterHandler} />
            {isEmpty && <NotFoundMessage />}

            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={pokemons.length}
                next={onPaginateHandle}
                hasMore={checkHasMoreItems}
                loader={<Spinner />}
                style={{ overflow: 'none' }}
            >
                <ListPokemons pokemons={pokemons} />
            </InfiniteScroll>
        </Container>
    )
}

export default Home