import React from 'react'
import styled from 'styled-components'
import Progress from './Progress'

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
        width: 100%;
        padding: 0 3rem;
        overflow-x: visible;
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
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <div className="container">
                <p className="header">Place your order</p>
                <Progress />
            </div>
        </StyledHeader>
    )
}

export default Header
