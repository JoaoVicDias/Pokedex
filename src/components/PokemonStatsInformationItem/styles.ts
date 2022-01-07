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

    > strong {
        width: 150px;
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 22px;
        color: rgb(23, 23, 27);
        text-transform: capitalize;
    }

    > p {
        font-size: 1.375rem;
        line-height: 25px;
        color: rgb(116, 116, 118);
    }
`

export const StatsBar = styled.div <IStatsBar>`
    flex: 1;

    > div {
        background-color: ${props => props.color};
        height: 4px;
        width: ${props => props.amount > 100 ? '100' : props.amount}%;
    }

`