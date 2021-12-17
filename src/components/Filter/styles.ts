import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const FilterInputsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    background-color: #fff;
    height: 60px;
    margin-bottom: 50px;
`

export const SearchImgContainer = styled.div `
    height: 60px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    border-radius: 10px;

    .svg_search {
        height: 25px;
        width: 25px;
    }
`