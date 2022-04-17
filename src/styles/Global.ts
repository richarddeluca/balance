import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.5%
        }
    }
    body {
        background: #dbe4fc
    }

    button {
        cursor: pointer;
    }

    .react-modal-overlay {
        background: rgba(0,0,0,.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: white;
        padding: 3rem;
        position: relative;
        border-radius: .25rem;
    }

    .react-modal-close-button{
        position: absolute;
        top: 1rem;
        right: 1rem;
    }
`

