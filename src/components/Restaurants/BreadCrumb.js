import React from 'react'
import styled from 'styled-components'
import marker from '../../assets/mapMarker.svg'

const StyledBreadCrumb = styled.div`
    display: flex;
    gap: 0.5rem;
    max-width: 1500px;
    margin: 0 auto;
    padding: 1rem 3rem;
    align-items: center;
    @media screen and (max-width: 500px){
        padding: 1rem;
    }
    .active{
        color: var(--text-lighter);
    }
`

const BreadCrumb = () => {
    return (
        <StyledBreadCrumb>
            <img src={marker} alt="map marker"/>
            <p>Home</p>
            <span className="fas fa-chevron-right"></span>
            <p>Category</p>
            <span className="fas fa-chevron-right"></span>
            <p className="active">Page Active</p>
            
        </StyledBreadCrumb>
    )
}

export default BreadCrumb
