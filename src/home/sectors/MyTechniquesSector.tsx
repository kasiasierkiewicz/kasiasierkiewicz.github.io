import styled, {useTheme} from "styled-components";
import {useCheckMobileScreen} from "tools/window_tools";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

interface WhyItem {
    title: string,
    description: string,
}

const Col = styled.div<{ $width?: string, $padding?: string,$margin?: string }>`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: ${(p) => p.$width || "auto"};
    margin: ${(p) => p.$margin || "0px"};
    
`


const Row = styled.div`
    display: flex;
`

const CenteredCol = styled(Col)`
    align-items: center;
    text-align: center;
    column-gap: 10px;
    row-gap: 20px;
`

const ItemRow = styled(Row)`
    border-width: 1px;
    border-color: darkgrey;
    border-bottom-style: solid;
    justify-content: space-between;
    column-gap: 20px;
    &:last-child {
        border-bottom-style: none;
    }
`

const CenteredRow = styled(Row)<{$width?: string, $justify?: string}>`
    text-align: center;
    align-items: center;
    justify-content: ${(p) => p.$justify || "left"};
    width: ${(p) => p.$width || "auto"};
`

const WhyRow = styled(Row)`
    flex-wrap: wrap;
    justify-content: space-between;
`

const H2 = styled.h2`

`

const H3 = styled.h3`

`

const whyItems: WhyItem[] = [
    {
        title: "Jesteś po porodzie i chcesz sprawdzić czy wszystko w porządku?",
        description: "Na taką wizytę warto przyjść po połogu. Sprawdzę jak funkcjonuje całe Twoje ciało po porodzie – między innymi postawę ciała, sposób oddechu, jak pracują Twoje mięśnie dna miednicy, czy nie ma u Ciebie rozejścia mięśnia prostego brzucha. Jeśli rodziłaś przez cesarskie cięcie lub miałaś nacięcie/pęknięcie krocza – sprawdzę również bliznę oraz pokażę jak samodzielnie zadbać o nią w domu."
    },
    {
        title: "Chcesz sprawdzić czy Twoje mięśnie dna miednicy pracują prawidłowo? ",
        description: "To wspaniale! Zapraszam Cię na wizytę nawet jeśli nie odczuwasz żadnych dolegliwości. Przeprowadzę pełną diagnostykę – sprawdzę między innymi siłę i wytrzymałość Twoich mięśni dna miednicy, opowiem jak one pracują oraz jak zadbać o nie na co dzień. Jeśli będzie taka potrzeba, zlecę odpowiednie ćwiczenia. "
    },
    {
        title: "Cierpisz na bolesne miesiączki? ",
        description: "Miesiączka wcale nie musi boleć i nie jest to „taka Twoja uroda”. Bardzo często ból wynika ze wzmożonego napięcia tkanek w obrębie miednicy. Fizjoterapia oferuje wiele metod walki z bólem podczas okresu i osiągamy bardzo dobre rezultaty. "
    },
    {
        title: "Nieprzyjemne dolegliwości w ciąży? ",
        description: "Boli Cię kręgosłup? Masz objawy rwy kulszowej? Pojawiły obrzęki lub drętwieją Ci dłonie? A może doskwiera Ci coś innego? Te i inne nieprzyjemne dolegliwości wcale nie są nieodłącznym elementem ciąży. Można sobie z nimi skutecznie radzić dzięki fizjoterapii. "
    }
]

const whyFirstCol = whyItems.splice(0, whyItems.length / 2)
const whySecCol = whyItems
const WhyComp = (item: WhyItem) => {
    const theme = useTheme()
    return (
        <ItemRow>
            <Col $width={"20%"} $margin={"1em 0em"}>
                <FontAwesomeIcon icon={faCheck} size={"2xl"} color={theme.colors.main} className={"fa-duotone"}/>
            </Col>
            <Col>
                <H3>{item.title}</H3>
                <p>{item.description}</p>
            </Col>

        </ItemRow>
    )
}

export const MyTechniquesSector = () => {
    const isMobile = useCheckMobileScreen()
    const width = isMobile ? "100%" : "49%"
    return (
        <CenteredCol>
            <CenteredRow $width={"100%"} $justify={"center"}>
                <h2>Kiedy i po co iść</h2>
            </CenteredRow>
            <CenteredRow $width={"100%"} $justify={"center"}>
                do fizjoterapeuty uroginekologicznego?
            </CenteredRow>
            <WhyRow>
                <Col $width={width}>
                    {whyFirstCol.map((el) => <WhyComp key={Math.random()}  title={el.title} description={el.description}/>)}
                </Col>
                <Col $width={width}>
                    {whySecCol.map((el) => <WhyComp key={Math.random()} title={el.title} description={el.description}/>)}
                </Col>
            </WhyRow>

        </CenteredCol>
    );
}