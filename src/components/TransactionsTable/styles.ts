import styled from 'styled-components'

export const Container = styled.section`
    margin-top: 4rem;
    
    table{
        width: 100%;
        border-spacing: 0 0.5rem;
    }
    
    th{
        color: black;
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
    }    

    td{
        padding: 1rem 2rem;
        background: #eef;
        color: #454b49;
        border-radius: .25rem;

        &:first-child {
            color: black;
        }

        &.income{
            color: green;
        }
        &.outcome{
            color: red;
        }
    }


`