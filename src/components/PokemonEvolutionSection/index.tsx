import React, { useMemo } from 'react'
import { v4 } from 'uuid'

import PokemonEvolutionSectionItem from '../PokemonEvolutionSectionItem'
import PokemonEvolutionSectionLevelItem from '../PokemonEvolutionSectionLevelItem'

import { Container } from './styles'

interface IPokemonEvolutionSectionProps {
    evolutions: {
        name: string;
        level?: number;
        item?: {
            name: string;
            url: string;
        }
    }[]
    onChangeSection: () => void;
}

const PokemonEvolutionSection: React.FC<IPokemonEvolutionSectionProps> = ({ evolutions, onChangeSection }) => {

    const treatedEvolutionsInformations = useMemo(() => {
        const newEvolutionItemList: any[] = []

        evolutions.forEach((evolution, idx) => {
            if (idx !== 0) {
                newEvolutionItemList.push({ level: evolution.level, item: evolution?.item })
            }
            newEvolutionItemList.push({ name: evolution.name })
        })

        return newEvolutionItemList

    }, [evolutions])

    return (
        <Container>
            {
                treatedEvolutionsInformations.map(evolution => {
                    if (evolution.name) {
                        return (
                            <PokemonEvolutionSectionItem
                                key={evolution.name}
                                onClick={onChangeSection}
                                {...evolution}
                            />
                        )
                    }

                    return (
                        <PokemonEvolutionSectionLevelItem
                            key={v4()}
                            {...evolution}
                        />
                    )
                })
            }
        </Container>
    )
}

export default PokemonEvolutionSection