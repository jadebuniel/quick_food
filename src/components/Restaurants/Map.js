import React from 'react'
import styled from 'styled-components'
import map from '../../assets/map.svg'

const StyledMap = styled.div`
    overflow: hidden;

    @media screen and (max-width: 500px){
        padding: 0 1rem;
    }

    img{
        width: 120vw;
        position: relative;
        left: -20vw;

    }
`

const Map = () => {
    return (
        <StyledMap>
            <img src={map} alt="map placeholder"/>
        </StyledMap>
    )
}

export default Map
