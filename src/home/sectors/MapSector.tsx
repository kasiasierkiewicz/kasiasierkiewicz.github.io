import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const MapWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3em;
    padding-top: 3em;
    padding-bottom: 3em;
    text-align: center;

`

const MapHeader = styled.h2`

`

const Map = styled.iframe`
    width: 100%;
    height: 300px;
    border: none;
`


export const MapSector: React.FC = () => {
    return (
        <MapWrapper>
            <MapHeader>
                Gdzie mnie znaleźć
            </MapHeader>
            <Map onClick={() => console.log('test')}
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38222.49466735019!2d18.460188072726577!3d54.541413859401274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda51d083fa4ab%3A0xa024a3312d285c6e!2sHotel%20107!5e0!3m2!1sen!2spl!4v1713961825453!5m2!1sen!2spl"
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade">

            </Map>
        </MapWrapper>
    )
}