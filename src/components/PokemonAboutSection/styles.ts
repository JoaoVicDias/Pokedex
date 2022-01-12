import styled from "styled-components";

interface IAboutSectionItemsContainer {
    color: string;
}

export const Container = styled.div `
    flex: 1;
    padding: 0 90px;

    @media(max-width:1023px) {
        padding: 0 45px;
    }

    @media(max-width:767px) {
        padding: 0;
    }

    > p {
        text-align: center;
        color: rgb(116, 116, 118);
        line-height: 23px;
        font-size: 1.4rem;
        margin-bottom: 10px;

        @media(max-width:767px) {
            line-height: initial;
            font-size: 1.2rem;
        }
    }
   
`

export const AboutSectionContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 100px;
    margin: 0 auto;

    @media(max-width:767px) {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

`

export const AboutSectionItemsContainer = styled.div<IAboutSectionItemsContainer> `
    flex: 1;

    @media(max-width:767px) {
        width: 300px;
    }

    @media(max-width:480px) {
        width: 100%;
    }

    > h4 {  
        text-transform: capitalize;
        font-size: 1.5rem;
        line-height: 23px;
        color: ${props => props.color};
        margin-bottom: 15px;

        @media(max-width:767px) {
            font-size: 1.3rem;
        }   
    }
`

export const AboutSectionItemsItems = styled.div `
    display: flex;
    flex-direction: column;
    gap: 10px;
`