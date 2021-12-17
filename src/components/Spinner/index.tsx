import React from 'react'

import { ReactComponent as PokeballSvg } from '../../assets/pokeballLoader.svg'

import { Container } from './styles'

const Spinner:React.FC = () => {

    return (
        <Container>
            <PokeballSvg/>
        </Container>
    )
}

export default Spinner