import React from 'react'
import styled from 'styled-components'
import restaurant from '../../assets/restaurantplaceholder.svg'
import fourstars from '../../assets/fourstars.svg'

const StyledHero = styled.div`
    background-color: var(--gray);
    height: 40rem;
    display: grid;
    place-items: center;
    color: white;
    position: relative;
    .container{
        text-align: center;
        margin-top: -5rem;
        .image-container{
            padding: 0.5rem 0.5rem 0.3rem 0.5rem;
            background-color: white;
            display: inline-block;
        }
        .ratings{
            display: flex;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;
            p{
                span{
                    color: yellow;
                    font-weight: 200;
                }
            }
        }
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
            color: white;
            margin-top: 0.5rem;
            @media screen and (max-width: 660px){
                font-size: clamp(0.8rem, 2.5vw, 1rem);
            }
        }

    }
`

const Header = () => {
    return (
        <StyledHero>
            <div className="container">
                <div className="image-container"><img src={restaurant} alt="restaurant logo"/></div>
                <div className="ratings">
                    <img src={fourstars} alt="ratings"/>
                    <p>( <span>98 reviews</span> )</p>
                </div>

                <p className="header">Mexican TacoMex</p>
                <p className="sub"><span className="fas fa-map-marker-alt"> </span> Mexican / American135 Newtownards Road, Belfast, BT4 1AB - Delivery charge: $10, free over $15.</p>
            </div>
        </StyledHero>
    )
}

export default Header
