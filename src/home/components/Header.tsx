import styled, { DefaultTheme } from 'styled-components';
import logo from 'assets/logo.svg';
import React from 'react';
import { useCheckMobileScreen } from 'tools/window_tools';
import { MobileHeader } from 'home/components/MobileHeader';
import { Link } from 'react-router-dom';

interface HeaderProps {
  theme: DefaultTheme;
}

const Container = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  width: 100%;
  max-height: 100px;
`;

const Row = styled.div`
  display: flex;
  align-content: space-evenly;
  max-height: 50px;
`;

const Column = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  flex-basis: ${(props) => props.width};
  justify-content: center;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-width: 1px;
  border-color: darkgrey;
  border-left-style: solid;
  &:first-child {
    border-left-style: none;
  }
`;

const NavbarLink = styled(Link)`
  color: ${(props) => props.theme.colors.third};
  font-size: 23px;
  text-decoration: none;
  font-family: ${(props) => props.theme.font.main};
`;

const Logo = styled.img`
  pointer-events: none;
  max-height: 100%;
`;

const SiteHeader: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <Row>
        <Column width={'20%'}>
          <Logo src={logo} alt='Katarzyna Sietko-Sierkiewicz' />
        </Column>
        <Column width={'80%'}>
          <Row>
            <LinkContainer>
              <NavbarLink to='/'>Home</NavbarLink>
            </LinkContainer>
            <LinkContainer>
              <NavbarLink to='/o-mnie'>About me</NavbarLink>
            </LinkContainer>
            <LinkContainer>
              <NavbarLink to=''>Details</NavbarLink>
            </LinkContainer>
            <LinkContainer>
              <NavbarLink to=''>Other</NavbarLink>
            </LinkContainer>
          </Row>
        </Column>
      </Row>
    </Container>
  );
};

export const Header: React.FC<HeaderProps> = (props) => {
  const isMobile = useCheckMobileScreen();
  return isMobile ? (
    <MobileHeader theme={props.theme} />
  ) : (
    <SiteHeader theme={props.theme} />
  );
};
