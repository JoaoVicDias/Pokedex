import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as SnorlaxSvg } from '../../assets/snorlax.svg'

import { Container } from './styles'

const ServerError: React.FC = () => (
    <Container>
            <SnorlaxSvg />
            <h1>Something went wrong, try again !!</h1>
            <Link to='/'> back home </Link>
    </Container>
)


export default ServerError