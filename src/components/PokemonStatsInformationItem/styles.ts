import styled from "styled-components";

interface IStatsBar {
    amount: number;
    color: string;
}

export const Container = styled.div`
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    gap: 40px;

    @media(max-width:767px) {
        padding: 0px 10px;
        gap: 16px;
    }

    > strong {
        width: 150px;
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 22px;
        color: rgb(23, 23, 27);
        text-transform: capitalize;

        @media(max-width:767px) {
            width: 80px;
            font-size: 1rem;
            line-height: initial;
        }
    }

    > p {
        font-size: 1.375rem;
        line-height: 25px;
        color: rgb(116, 116, 118);

        @media(max-width:767px) {
            font-size: 1.1rem;
            line-height: initial;
        }
    }
`

export const StatsBarContainer = styled.div`
    flex: 1;
`

export const StatsBar = styled.div <IStatsBar>`
    background-color: ${props => props.color};
    height: 4px;    
    width: ${props => props.amount > 100 ? '100' : props.amount}%;
    animation: statsBarAnimation 0.5s ease-in-out;
    
    @keyframes statsBarAnimation {
        0% {
            width: 0px;
        }
    }
    



`