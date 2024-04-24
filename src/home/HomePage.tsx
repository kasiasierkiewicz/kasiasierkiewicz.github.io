import React from 'react'
import styled, { useTheme } from 'styled-components'
import { HomeComponent } from 'home/components/HomeComponent'
import { MyTechniquesSector } from 'home/sectors/MyTechniquesSector'
import { TopSector } from './sectors/TopSector'
import { AboutSector } from './sectors/AboutSector'
import { PhraseSector } from './sectors/PhraseSector'
import { ReviewSector } from './sectors/ReviewSector'
import { MapSector } from './sectors/MapSector'

const Layout = styled.div`
    display: grid;
`


interface HomePageProps {
}

export const HomePage: React.FC<HomePageProps> = (props) => {
    const theme = useTheme()
    return (
        <>
            <HomeComponent>
                <TopSector />
            </HomeComponent>
            <HomeComponent background={theme.colors.secondary}>
                <AboutSector />
            </HomeComponent>
            <HomeComponent>
                <PhraseSector />
            </HomeComponent>
            <HomeComponent background={theme.colors.secondary}>
                <MyTechniquesSector />
            </HomeComponent>
            <HomeComponent>
                <ReviewSector />
            </HomeComponent>
            <HomeComponent background={theme.colors.secondary}>
                <MapSector />
            </HomeComponent>
        </>
    )
}