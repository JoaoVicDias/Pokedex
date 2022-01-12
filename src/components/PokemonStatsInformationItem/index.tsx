import React from 'react'

import { Container, StatsBarContainer, StatsBar } from './styles'

interface IPokemonStatsInformationItemProps {
    label: string;
    amount: number;
    color: string;
}

const PokemonStatsInformationItem: React.FC<IPokemonStatsInformationItemProps> = ({ amount, color, label }) => (
    <Container>
        <strong> {label} </strong>
        <p> {amount} </p>
        <StatsBarContainer>
            <StatsBar amount={amount} color={color}>
            </StatsBar>
        </StatsBarContainer>
        <p>100</p>
    </Container>
)



export default PokemonStatsInformationItem