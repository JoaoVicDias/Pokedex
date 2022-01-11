import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as PokeballSvg } from '../../assets/pokeballLoader.svg'

import { Container } from './styles'

const NotFound: React.FC = () => (
    <Container>
        <span>Sorry</span>
        <h1>
            4
            <PokeballSvg/>
            4
        </h1>
        <strong>Pokemon not found</strong>
        <Link to='/'>back home</Link>
    </Container>
)


export default NotFound