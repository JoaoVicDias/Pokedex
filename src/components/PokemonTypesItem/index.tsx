import React, { useMemo } from 'react'

import { ReactComponent as BugTypeImg } from '../../assets/typesImg/bug.svg'
import { ReactComponent as DarkTypeImg } from '../../assets/typesImg/dark.svg'
import { ReactComponent as DragonTypeImg } from '../../assets/typesImg/dragon.svg'
import { ReactComponent as EletricTypeImg } from '../../assets/typesImg/eletric.svg'
import { ReactComponent as FairyTypeImg } from '../../assets/typesImg/fairy.svg'
import { ReactComponent as FightingTypeImg } from '../../assets/typesImg/fighting.svg'
import { ReactComponent as FireTypeImg } from '../../assets/typesImg/fire.svg'
import { ReactComponent as FlyingTypeImg } from '../../assets/typesImg/flying.svg'
import { ReactComponent as GhostTypeImg } from '../../assets/typesImg/ghost.svg'
import { ReactComponent as GrassTypeImg } from '../../assets/typesImg/grass.svg'
import { ReactComponent as GroundTypeImg } from '../../assets/typesImg/ground.svg'
import { ReactComponent as IceTypeImg } from '../../assets/typesImg/ice.svg'
import { ReactComponent as NormalTypeImg } from '../../assets/typesImg/normal.svg'
import { ReactComponent as PoisonTypeImg } from '../../assets/typesImg/poison.svg'
import { ReactComponent as PsychicTypeImg } from '../../assets/typesImg/psychic.svg'
import { ReactComponent as SteelTypeImg } from '../../assets/typesImg/steel.svg'
import { ReactComponent as RockTypeImg } from '../../assets/typesImg/rock.svg'
import { ReactComponent as WaterTypeImg } from '../../assets/typesImg/water.svg'

import { Container } from './styles'

interface IPokemonTypesItemProps {
    typeName: string;
}


const PokemonTypesItem: React.FC<IPokemonTypesItemProps> = ({ typeName }) => {

    const selectTypesInformations = useMemo(() => {
        switch (typeName) {
            case 'bug':
                return {
                    color: '#8CB230',
                    image: BugTypeImg
                }
            case 'dark':
                return {
                    color: '#58575F',
                    image: DarkTypeImg
                }
            case 'dragon':
                return {
                    color: '#0F6AC0',
                    image: DragonTypeImg
                }
            case 'electric':
                return {
                    color: '#EED535',
                    image: EletricTypeImg
                }
            case 'fairy':
                return {
                    color: '#ED6EC7',
                    image: FairyTypeImg
                }
            case 'fighting':
                return {
                    color: '#D04164',
                    image: FightingTypeImg
                }
            case 'fire':
                return {
                    color: '#FD7D24',
                    image: FireTypeImg
                }
            case 'flying':
                return {
                    color: '#748FC9',
                    image: FlyingTypeImg
                }
            case 'ghost':
                return {
                    color: '#556AAE',
                    image: GhostTypeImg
                }
            case 'grass':
                return {
                    color: '#62B957',
                    image: GrassTypeImg
                }
            case 'ground':
                return {
                    color: '#DD7748',
                    image: GroundTypeImg
                }
            case 'ice':
                return {
                    color: '#61CEC0',
                    image: IceTypeImg
                }
            case 'normal':
                return {
                    color: '#9DA0AA',
                    image: NormalTypeImg
                }
            case 'poison':
                return {
                    color: '#A552CC',
                    image: PoisonTypeImg
                }
            case 'psychic':
                return {
                    color: '#EA5D60',
                    image: PsychicTypeImg
                }
            case 'rock':
                return {
                    color: '#BAAB82',
                    image: RockTypeImg
                }
            case 'steel':
                return {
                    color: '#417D9A',
                    image: SteelTypeImg
                }
            case 'water':
                return {
                    color: '#4A90DA',
                    image: WaterTypeImg
                }

            default:
                return {
                    color: '#9DA0AA',
                    image: NormalTypeImg
                }
        }
    }, [typeName])

    return (
        <Container color={selectTypesInformations.color}>
            <selectTypesInformations.image />
            <span>
                {typeName}
            </span>
        </Container>
    )
}

export default PokemonTypesItem