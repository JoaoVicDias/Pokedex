import styled from "styled-components";

interface IAboutSectionItemsContainer {
    color: string;
}

export const Container = styled.div `
    flex: 1;
    padding: 0 90px;

    > p {
        text-align: center;
        color: rgb(116, 116, 118);
        line-height: 23px;
        font-size: 1.4rem;
        margin-bottom: 10px;
    }
   
`

export const AboutSectionContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 100px;
    min-width: 60%;
    margin: 0 auto;
`

export const AboutSectionItemsContainer = styled.div<IAboutSectionItemsContainer> `
    flex: 1;
    > h4 {  
        text-transform: capitalize;
        font-size: 1.5rem;
        line-height: 23px;
        color: ${props => props.color};
        margin-bottom: 15px;
    }
`

export const AboutSectionItemsItems = styled.div `
    display: flex;
    flex-direction: column;
    gap: 10px;
`