import React from 'react'
import styled from 'styled-components'
import dummy from '../../assets/dummy.svg'
import stars from '../../assets/fourstars.svg'
import check from '../../assets/circleCheck.svg'
import error from '../../assets/circleX.svg'
import ribbon from '../../assets/ribbon.svg'
import {useHistory} from 'react-router-dom'

const StyledCard = styled.div`
    display: flex;
    position: relative;
    padding: 1.3rem 2rem;
    border: 2px solid var(--light-gray);
    width: auto;
    gap: 2rem;
    align-items: center; 
    background-color: ${({background}) => background == 'white' ? 'white' : 'unset'};
    @media screen and (max-width: 400px){
        padding: 1.3rem 1rem;
    }
    .image-container{
        padding: 0.3rem;
        border: 1px solid var(--light-gray);
        max-height: 112px;
    }
    .details{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .rating{
            display: flex;
            gap: 0.8rem;
            span{
                font-size: 14px;
                i{
                    font-style: unset;
                    color: red;

                }
            }
        }
        .name{
            font-size: 2rem;
            @media screen and (max-width: 600px){
                font-size: clamp(1.25rem, 5vw, 2rem);
            }
        }
        .category{
            font-size: 12px;
            color: var(--text-lighter);
            font-style: italic;
            font-weight: 700;
        }
        .info{
            margin-top: 0.5rem;
            font-size: 15px;
            color: var(--text-lighter);
            font-weight: 500;
            .open{
                color: red;

            }
        }

        .services{
            display: flex;
            gap: 1.5rem;
            margin-top: 5px;
            align-items: center;
            .service{
                display: flex;
                align-items: center;
                gap: 5px;
                font-size: 14px;
            }
        }
    }
    .ribbon{
        position: absolute;
        top: -5px;
        left: -5px;
    }
    .menu{
        margin-left: auto;
        cursor: pointer;
        padding: 1rem 2rem;
        font-size: 1rem;
        text-transform: uppercase;
        background-color: #85C99D;
        color: white;
        border: none;
        outline: none;
        border-radius: 5px;
    }
`

const RestaurantCard = ({home, data, background}) => {
    const history = useHistory()
    return (
        <StyledCard background={background}>
            <div className="image-container">
                <img src={dummy} alt="image-placeholder"/>
            </div>
            <div className="details">
                <div className="rating">
                    <img src={stars} alt="ratings"/> 
                    {!home && <span>(<i>98 reviews</i>)</span>}
                </div>
                <h2 className="name">{data.name}</h2>
                <p className="category">{data.category}</p>
                <p className="info">{data.address}, <span className="open">Opens at 17:00</span>
                {!home && <span> Minimum order: $15</span>}
                </p>
                <div className="services">
                    <div className="service">
                        <span>Take away</span> <img src={check} alt=""/>
                    </div>
                    <div className="service">
                        <span>Delivery</span> <img src={error} alt=""/>
                    </div>
                </div>
            </div>
            <img src={ribbon} className="ribbon"/>
            {!home && <button className="menu" onClick={() => history.push('/details')}>view menu</button>}
        </StyledCard>
    )
}

export default RestaurantCard
