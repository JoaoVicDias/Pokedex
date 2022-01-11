import React from 'react'

import PokemonStatsInformationItem from '../PokemonStatsInformationItem'

import { Container } from './styles'


interface IPokemonStatsSectionProps {
    color: string;
    informations: {
        base_stat: number;
        stat: {
            name: string;
        }
    }[]
}

const PokemonStatsSection: React.FC<IPokemonStatsSectionProps> = ({ color, informations }) => (
    <Container>
        {
            informations.map(information => (
                <PokemonStatsInformationItem
                    key={information.stat.name}
                    amount={information.base_stat}
                    label={information.stat.name}
                    color={color}
                />
            ))
        }
    </Container>
)

export default PokemonStatsSection