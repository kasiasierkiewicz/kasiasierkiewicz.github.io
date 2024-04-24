import styled from 'styled-components'
import { ReactNode } from 'react'
import { useCheckMobileScreen } from '../../tools/window_tools'

type Props = {
    children: ReactNode
    background?: string
}

const Row = styled.div<{ $background?: string }>`
    background-color: ${(props) => props.$background || props.theme.colors.main};
    align-items: center;
`

const Children = styled.div<{ $width: string }>`
    width: ${(props) => props.$width};
    margin: auto;

`
export const HomeComponent = ({ children, background }: Props) => {
    const isMobile = useCheckMobileScreen()
    const width = isMobile ? '100%' : '80%'
    return (
        <Row $background={background}>
            <Children $width={width}>
                {children}
            </Children>
        </Row>
    )
}