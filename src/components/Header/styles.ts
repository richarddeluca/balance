import styled from 'styled-components'

export const Container = styled.header`
    background: blue;
`

export const Content = styled.div`
    max-width: 1180px;
    margin: 0 auto;

    padding: 1rem 1rem 12rem;
    
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button {
        font-size: 1rem;
        color: #fff;
        background-color: #cad6ff;
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }
`