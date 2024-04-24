import React from 'react'
import styled from 'styled-components'
import background_img from 'assets/background_home.webp'
import { useCheckMobileScreen } from 'tools/window_tools'

const FirstRow = styled.img`
    background-size: cover;
    background-position: center;
    width: 100%;
`

const Wrapper = styled.div<{ $width: string }>`
    display: grid;
    width: ${(p) => p.$width};
    align-content: center;
`
export const TopSector = () => {
    const isMobile = useCheckMobileScreen()

    return <FirstRow src={background_img} />
}
