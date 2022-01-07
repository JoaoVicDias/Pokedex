import React from 'react'

import { ReactComponent as AbraSvg } from '../../assets/abra_Pokemon.svg'

import { Container } from './styles'

const NotFoundMessage:React.FC = () =>  (
        <Container>
            <span> Nothing was found! </span>
            <AbraSvg/>
        </Container>
)


export default NotFoundMessage