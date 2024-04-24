import React from 'react'
import styled from 'styled-components'
import about_me_img from 'assets/about.webp'
import { useCheckMobileScreen } from '../../tools/window_tools'

const Row = styled.div<{ $wrap?: boolean }>`
    display: flex;
    align-content: space-between;
    flex-wrap: ${(props) => (props.$wrap ? 'wrap' : 'no-wrap')};
`

const Col = styled.div<{ $width?: string }>`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.$width || 'auto'};
    text-align: center;
    align-content: center;
    justify-content: center;
`

const Image = styled.img<{ $padding?: string }>`
    padding: ${(props) => props.$padding || '0px'};
    width: 100%;
`

export const AboutSector = () => {
    const isMobile = useCheckMobileScreen()
    const width = isMobile ? '100%' : '50%'
    return (
        <Row $wrap={isMobile}>
            <Col $width={width}>
                <h3>About me</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                    sollicitudin ultricies justo sed tempor. Ut risus tellus, venenatis
                    eget pharetra in, fermentum vitae velit. Nulla eget vehicula augue,
                    tempor laoreet purus. Nullam ac sollicitudin nulla. Phasellus
                    dignissim nisl lacus, vitae aliquet lorem feugiat id. Etiam feugiat,
                    nisi sed sagittis porttitor, leo ante dictum risus, quis mollis dolor
                    neque sit amet nibh. Fusce consequat nisi lectus, ac elementum nisi
                    porta non. Vivamus elementum felis quis dui commodo aliquam. Morbi
                    elit metus, venenatis at eleifend non, sagittis eget diam. Maecenas
                    vitae nibh ac risus aliquet consectetur. Praesent aliquam fermentum
                    lorem, vitae maximus purus blandit id. Etiam nibh ante, malesuada nec
                    ante quis, eleifend dignissim nulla. Maecenas viverra lectus eget urna
                    hendrerit, et suscipit velit porta.
                </p>
                <button>Click me</button>
            </Col>
            <Col $width={width}>
                <Image $padding={'1em 0'} src={about_me_img} alt={'about me'} />
            </Col>
        </Row>
    )
}
