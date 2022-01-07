import React from 'react'

import { Container } from './styles'

interface IPokemonAboutInformationItemProps {
    label: string;
    value: string | number | React.ReactNode;
}

const PokemonAboutInformationItem: React.FC <IPokemonAboutInformationItemProps>= ({ label, value }) => (
    <Container>
        <strong> {label} </strong>
        <span> {value} </span>
    </Container>
)



export default PokemonAboutInformationItem