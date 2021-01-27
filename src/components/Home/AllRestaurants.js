import React from 'react'
import styled from 'styled-components'

const StyledAll = styled.div`
    max-width: 1920px;
    background-color: #85C99D;
    .container{
        max-width: 1500px;
        margin: 0 auto;
        padding: 5rem 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media screen and (max-width: 1200px){
            flex-direction: column;
        }

        @media screen and (max-width: 600px){
            padding: 5rem 1rem;
        }

        .header{
            font-size: 3rem;
            font-weight: 300;
            color: white;
            white-space: nowrap;

            @media screen and (max-width: 1200px){
            text-align: center;
        }
            @media screen and (max-width: 950px){
                font-size: clamp(2rem, 6.5vw, 3rem);
                white-space: normal;
            }
        }
        .sub{
            color: white;
            margin-top: 0.5rem;
            font-size: 1.25rem;

            @media screen and (max-width: 1200px){
            text-align: center;
        }
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
            outline: none;
            @media screen and (max-width: 1200px){
                margin-top: 3rem;
        }
        }
    }
`

const AllRestaurants = () => {
    return (
        <StyledAll>
            <div className="container">
               <div className="text">
                    <p className="header">Choose from over 2,000 Restaurants</p>
                    <p className="sub">Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>
               </div>
               <button className="button-view">view all restaurants</button>
            </div>
        </StyledAll>
    )
}

export default AllRestaurants
