import React from 'react'
import styled from 'styled-components'
import mug from '../../assets/mug.svg'

const StyledAll = styled.div`
    max-width: 1920px;
    background-color: var(--gray);
    margin: 0 auto;
    .container{
        max-width: 1500px;
        margin: 0 auto;
        padding: 10rem 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        @media screen and (max-width: 600px){
            padding: 5rem 1rem;
        }

        .header{
            font-size: 3rem;
            font-weight: 300;
            color: white;
            white-space: nowrap;
            margin-top: 3rem;
            text-align: center;
            @media screen and (max-width: 950px){
                font-size: clamp(2rem, 6.5vw, 3rem);
                white-space: normal;
            }
        }
        .sub{
            color: white;
            margin-top: 0.5rem;
            font-size: 1.25rem;
            text-align: center;
            @media screen and (max-width: 660px){
                font-size: clamp(0.8rem, 2.5vw, 1.25rem);
            }
        }
        .button-view{
            text-transform: uppercase;
            font-size: 1rem;
            color: white;
            background: transparent;
            border: none;
            border: 3px solid white;
            padding: 1rem 2rem;
            cursor: pointer;
        }
    }
`

const Deliver = () => {
    return (
        <StyledAll>
            <div className="container">
                <img src={mug} alt=""/>
                <p className="header">We also deliver to your office</p>
                <p className="sub">Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>
            </div>
        </StyledAll>
    )
}

export default Deliver
