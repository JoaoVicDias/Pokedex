import React from 'react'

import { Container, StatsBar } from './styles'

interface IPokemonStatsInformationItemProps {
    label: string;
    amount: number;
    color: string;
}

const PokemonStatsInformationItem: React.FC<IPokemonStatsInformationItemProps> = ({ amount, color, label }) => (
    <Container>
        <strong> {label} </strong>
        <p> {amount} </p>
        <StatsBar amount={amount} color={color}>
            <div></div>
        </StatsBar>
        <p>100</p>
    </Container>
)



export default PokemonStatsInformationItem