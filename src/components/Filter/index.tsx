import React from 'react'
import { GrSearch } from 'react-icons/gr'

import Input from '../Input'

import { Container, FilterInputsContainer, SearchImgContainer } from './styles'

interface IFilterProps {
    filterConfig: {
        filterName: string;
        placeholder: string;
        filterType: string;
    }[]
    onActionFilter: (event: any, filterName: string) => void;
}

const Filter: React.FC<IFilterProps> = ({ filterConfig, onActionFilter }) => {

    return (
        <Container>
            {
                filterConfig.map((item) => (
                    <FilterInputsContainer key={item.filterName}>
                        <SearchImgContainer>
                            <GrSearch className="svg_search" />
                        </SearchImgContainer>
                        <Input
                            type={item.filterType}
                            name={item.filterName}
                            placeHolder={item.placeholder}
                            onChange={(e) => onActionFilter(e, item.filterName)}

                        />
                    </FilterInputsContainer>
                ))
            }
        </Container>
    )
}

export default Filter