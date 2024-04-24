import React from 'react'
import styled from 'styled-components'

const Col = styled.div<{ $padding?: string, $width?: string }>`
    display: flex;
    flex-direction: column;
    padding: ${(props) => props.$padding || '0px'};
    width: ${(props) => props.$width || 'auto'};
    text-align: center;
    align-content: center;
    justify-content: center;
`

export const PhraseSector = () => {
    return (
        <Col $padding={'20px'}>
            <h1>
                "A single act of kindness
                can cause ripples of healing"
            </h1>
            <p> Anonymus </p>
        </Col>
    )
}