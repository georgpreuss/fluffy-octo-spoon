import React, { FC } from 'react'
import Hero from './styles/Hero'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle'

const theme = {
    palette: {
        primary: '#c400c4',
        background: '#111827',
    },
    breakpoints: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
    },
}

const App: FC = () => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Hero>hello world</Hero>
            </ThemeProvider>
        </>
    )
}

export default App
