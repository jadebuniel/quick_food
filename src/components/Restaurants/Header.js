import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    background-color: var(--gray);
    height: 30rem;
    display: grid;
    place-items: center;
    color: white;
    position: relative;
    .container{
        text-align: center;
        margin-top: -5rem;
        .header{
            font-size: 4rem;
            font-weight: 300;
            color: whitesmoke;
            white-space: nowrap;
            @media screen and (max-width: 950px){
                font-size: clamp(2rem, 6.5vw, 4rem);
                white-space: normal;
            }
        }
        .sub{
            color: var(--light-gray);
            margin-top: 0.5rem;
            font-size: 1.25rem;
            @media screen and (max-width: 660px){
                font-size: clamp(0.8rem, 2.5vw, 1.25rem);
            }
        }
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <div className="container">
                <p className="header">24 results in your zone</p>
                <p className="sub"><i className="fas fa-map-marker-alt"></i> 135 Newtownards Road, Belfast, BT4 1AB</p>
            </div>
        </StyledHeader>
    )
}

export default Header
