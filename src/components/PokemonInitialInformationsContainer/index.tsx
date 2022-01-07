import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import PokemonTypesItem from '../PokemonTypesItem'

import { Container, PokemonInformationsContainer, PokemonInformationsImg, PokemonInformationsItems } from './styles'

interface IPokemonType {
    type: {
        name: string;
    }
}

interface IPokemonInitialInformationsProps {
    id: string;
    name: string;
    types: IPokemonType[];
    color: string;
    imgUrl: string;
}

const PokemonInitialInformationsContainer: React.FC<IPokemonInitialInformationsProps> = ({
    id,
    name,
    types,
    color,
    imgUrl }) => {

        const navigate = useNavigate()

    return (
        <Container color={color}>
            <FaChevronLeft className='svg__left--arrow' onClick={() => navigate('/')} />
            <h1> {name} </h1>
            <PokemonInformationsContainer>
                <PokemonInformationsImg>
                    <img src={imgUrl} alt={name} />
                </PokemonInformationsImg>
                <PokemonInformationsItems>
                    <small> #{id} </small>
                    <p> {name} </p>
                    <div>
                        {
                            types.map(type => (
                                <PokemonTypesItem key={type.type.name} typeName={type.type.name} />
                            ))
                        }
                    </div>
                </PokemonInformationsItems>
            </PokemonInformationsContainer>
        </Container>
    )
}



export default PokemonInitialInformationsContainer