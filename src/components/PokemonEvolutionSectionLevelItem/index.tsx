import React, { useMemo, useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { FaLongArrowAltRight, FaLongArrowAltDown } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import { ItemEvolutionContainer, LevelContainer } from './styles'



interface IPokemonEvolutionSectionLevelItemProps {
    level?: number;
    item?: {
        name: string;
        url: string;
    }
}

interface IEvolutionItem {
    imageUrl: string;
    name: string;
}

const PokemonEvolutionSectionLevelItem: React.FC<IPokemonEvolutionSectionLevelItemProps> = ({ item, level }) => {

    const navigate = useNavigate()

    const [evolutionItem, setEvolutionItem] = useState<IEvolutionItem>({ imageUrl: '', name: '' })
    const [loading, setLoading] = useState<boolean>(false)

    const treatedComponent = useMemo(() => {
        if(loading) return null

        if (level)
            return (
                <LevelContainer>
                    <FaLongArrowAltRight className='svg__desktop' />
                    <FaLongArrowAltDown className='svg__mobile'/>
                    <span>
                        (Level {level})
                    </span>
                </LevelContainer>
            )

        if (item)
            return (
                <ItemEvolutionContainer>
                    <img src={evolutionItem.imageUrl} alt={evolutionItem.name} />
                    <span> {evolutionItem.name} </span>
                </ItemEvolutionContainer>
            )

        return (
            <LevelContainer>
                <FaLongArrowAltDown className='svg__mobile'/>
                <FaLongArrowAltRight className='svg__desktop' />
            </LevelContainer>
        )

    }, [level, item, evolutionItem, loading])

    const onFetchEvolutionItemInformations = useCallback(async () => {
        if (!item) return

        try {
            setLoading(true)
            const res = await axios.get(item.url)
            setEvolutionItem((prevState: IEvolutionItem) => ({
                ...prevState,
                imageUrl: res.data.sprites.default,
                name: item.name
            }))
            setLoading(false)
        } catch (err) {
            console.log(err)
            navigate('/not-found')
        }
    }, [item, navigate])

    useEffect(() => {
        onFetchEvolutionItemInformations()
    }, [onFetchEvolutionItemInformations])

    return treatedComponent
}

export default PokemonEvolutionSectionLevelItem