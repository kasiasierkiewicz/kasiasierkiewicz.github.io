import React, {ReactNode, useEffect, useRef, useState} from 'react';
import styled, {keyframes} from 'styled-components';
import {useCheckMobileScreen} from "../../tools/window_tools";

interface CarouselProps {
    children: ReactNode[]
}


const CarouselWrapper = styled.div`
    display: flex;
    column-gap: 3em;
    width: 0;
    overflow: hidden;
    scroll-behavior: smooth;
    flex-basis: 100%;
`;

const Item = styled.div<{ $width: number }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: ${(p) => `calc(${p.$width + "%"} - 3em)`};
    max-width: ${(p) => `calc(${p.$width + "%"} - 3em)`};
    width: 100%;
`

const CarouselPoc: React.FC<CarouselProps> = ({children}) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [{width, height}, setDimensions] = useState({width: 0, height: 0})
    const [itemsCount, setItemCount] = useState(0)
    const isMobile = useCheckMobileScreen();
    const itemWidth = isMobile ? width : width / 4
    const getDimensions = () => ({
        width: carouselRef.current?.offsetWidth || 300,
        height: carouselRef.current?.offsetHeight || 300
    })

    useEffect(() => {
        const handleResize = () => {
            setDimensions(getDimensions())
        }

        if (carouselRef.current) {
            setDimensions(getDimensions())
        }

        window.addEventListener("resize", handleResize)

        const intervalId = itemWidth != 0 ? setInterval(() => {
            return scrollToNext()
        }, 5000) : undefined;

        const scrollToNext = () => {
            scrollTo(itemWidth);
        };

        const scrollTo = (scrollOffset: number) => {
            if (carouselRef.current) {
                carouselRef.current.scrollLeft += scrollOffset;
            }
        };


        return () => {
            window.removeEventListener("resize", handleResize)
            if (intervalId) {
                clearInterval(intervalId)
            }
        };
    }, []);

    useEffect(() => {

    }, []);

    return (
        <CarouselWrapper ref={carouselRef}>
            {children.map(child => <Item key={Math.random().toString(36).slice(2, 7)} $width={isMobile ? 100 : 25}>{child}</Item>)}
        </CarouselWrapper>
    );
};

export default CarouselPoc;
