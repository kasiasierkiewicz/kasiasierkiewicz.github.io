import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { myTheme } from 'home/app-theme'
import { Header } from 'home/components/Header'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { About } from 'home/about/About'
import { HomePage } from './HomePage'

const HeaderRow = styled.div`
    z-index: 100;
    position: sticky;
    top: 0;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: ${(props) => props.theme.colors.secondary};
`

const Column = styled.div`
    display: grid;
    background-color: ${(props) => props.theme.colors.main};
`

function Home() {
    return (
        <ThemeProvider theme={myTheme}>
            <HashRouter>
                <HeaderRow theme={myTheme}>
                    <Header theme={myTheme} />
                </HeaderRow>
                <Column theme={myTheme}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/o-mnie" element={<About />} />
                    </Routes>
                </Column>
            </HashRouter>
        </ThemeProvider>
    )
}

export default Home
