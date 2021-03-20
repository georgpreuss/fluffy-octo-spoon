import { createGlobalStyle } from 'styled-components'

// browser resets plus base styles
export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
}
body {
    font-family: 'Inter', sans-serif;
    }
`
