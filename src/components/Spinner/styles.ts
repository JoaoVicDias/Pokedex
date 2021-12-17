import styled from 'styled-components'


export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;

    > svg {
        width: 200px;
        height: 200px;
        animation: rotatePokeball 1.1s infinite linear;

        @keyframes rotatePokeball {
            from {
                transform:rotateZ(0);
            }
            
            to {
                transform: rotateZ(360deg);
            }
        }
    }

`