import React, { useMemo } from 'react'

import PokemonTypesColors from '../../Utils/ColorsToTypes'

import { Container } from './styles'

interface IPokemonTypesItemProps {
    typeName: string;
    justIcon?: boolean;
}


const PokemonTypesItem: React.FC<IPokemonTypesItemProps> = ({ typeName, justIcon }) => {

    const selectTypesInformations = useMemo(() => PokemonTypesColors.find(type => type.type === typeName) , [typeName])

    return (
        <Container color={selectTypesInformations?.color || '#fff'}>
            <img src={selectTypesInformations?.image}  alt={typeName}/>
            {
                !justIcon &&
                <span>
                    {typeName}
                </span>
            }

        </Container>
    )
}

export default PokemonTypesItem