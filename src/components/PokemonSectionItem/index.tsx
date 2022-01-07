import React from 'react'

import { Container } from './styles'

interface IPokemonSectionItemProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const PokemonSectionItem: React.FC<IPokemonSectionItemProps> = ({ isActive, label, onClick }) => (
    <Container isActive={isActive} onClick={onClick}>
        {label}
    </Container>
)


export default PokemonSectionItem