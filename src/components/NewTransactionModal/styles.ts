import styled from 'styled-components'
import { darken, transparentize } from 'polished'
export const Container = styled.form`
    h2{
        color: black;
        font-size: 1.5rem;
        margin-bottom: 2rem;

    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius:.25rem;
        border: 1px solid gray;
        background: 1px solid gray;
        font-weight: 400;
        font-size: 1rem;
    
        &::placeholder{
            color: black;
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type='submit']{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: green;
        color: white;
        border-radius: .25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;
        transition: filter .2s;
        &:hover {
            filter: brightness(0.9)
        }
    }
`

export const TransactionButton = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .5rem;
    margin: 1rem 0;
    
`

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red' | 'blue' | 'yellow' | 'purple'
}

const colors = {
    green: '#0c0',
    red: '#b00',
    blue: '#00c',
    yellow: 'yellow',
    pink: 'pink',
    purple: 'purple'
}

export const RadioBox = styled.button<RadioBoxProps>`
    
    background: ${(props) => props.isActive ?
        transparentize(0.9, colors[props.activeColor]) : 'transparent'};

    height: 4rem;
    border: 1px solid #ddd;
    border-radius: .25rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
    transition: border-color .2s;
    
    &:hover {
        border-color: ${darken(0.16, '#ddd')}
    }

    img{
        width: 20px;
        height: 20px
    }

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: black;
    }
`