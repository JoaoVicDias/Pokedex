import React from 'react'

import PokemonAboutInformationItem from '../../components/PokemonAboutInformationItem'

import { Container, AboutSectionContainer, AboutSectionItemsContainer, AboutSectionItemsItems } from './styles'

interface IPokemonAboutSectionProps {
    informations: {
        title: string;
        items: {
            label: string;
            value: string | number | React.ReactNode;
        }[]
    }[]
    color: string;
    description: string;
}

const PokemonAboutSection: React.FC<IPokemonAboutSectionProps> = ({ informations, color, description }) => (
    <Container>
        <p> {description} </p>
        <AboutSectionContainer>
            {
                informations.map(information => (
                    <AboutSectionItemsContainer key={information.title} color={color}>
                        <h4> {information.title} </h4>
                        <AboutSectionItemsItems>
                            {
                                information.items.map(item => (
                                    <PokemonAboutInformationItem
                                        key={item.label}
                                        label={item.label}
                                        value={item.value}
                                    />
                                ))
                            }
                        </AboutSectionItemsItems>
                    </AboutSectionItemsContainer>
                ))
            }
        </AboutSectionContainer>
    </Container>
)


export default PokemonAboutSection