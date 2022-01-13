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
    onActionFilter: (event: React.ChangeEvent<HTMLInputElement>, filterName: string) => void;
}

const Filter: React.FC<IFilterProps> = ({ filterConfig, onActionFilter }) => (
    <Container>
        {
            filterConfig.map((filter) => (
                <FilterInputsContainer key={filter.filterName}>
                    <SearchImgContainer>
                        <GrSearch className="svg_search" />
                    </SearchImgContainer>
                    <Input
                        type={filter.filterType}
                        name={filter.filterName}
                        placeHolder={filter.placeholder}
                        onChange={(event) => onActionFilter(event, filter.filterName)}

                    />
                </FilterInputsContainer>
            ))
        }
    </Container>
)


export default Filter