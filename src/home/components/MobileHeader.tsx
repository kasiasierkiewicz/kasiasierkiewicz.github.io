import styled, {DefaultTheme} from "styled-components";
import React from "react";

interface HeaderProps {
    theme: DefaultTheme
}

const Container = styled.div`
    background: ${(props) => props.theme.colors.secondary};
    position: fixed;
    width: 100%;
    padding: 10px;
`

export const MobileHeader: React.FC<HeaderProps> = (props) => {
    return (<Container>
        <p>Elo Ziom</p>
    </Container>)
}