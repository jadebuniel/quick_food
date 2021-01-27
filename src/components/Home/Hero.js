import React from 'react'
import styled from 'styled-components'

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
            @media screen and (max-width: 660px){
                font-size: clamp(0.8rem, 2.5vw, 1rem);
            }
        }
        .input-container{
            position: relative;
            margin: 0 auto;
            margin-top: 1.2rem;
            width: 80%;
            input{
                padding: 1.2rem 2rem;
                border-radius: 100px;
                width: 100%;
                font-size: 1rem;
                font-weight: 700;
                border: none;
                outline: none;
                @media screen and (max-width: 660px){
                        font-size: clamp(0.8rem, 2.5vw, 1rem);
                    }
                &::placeholder{
                    color: var(--gray);
                        @media screen and (max-width: 660px){
                        font-size: clamp(0.8rem, 2.5vw, 1rem);
                    }
                }
            }
            .fas{
                font-size: 1.5rem;
                color: var(--text-lighter);
                position: absolute;
                top: 17px;
                right: 25px;
                cursor: pointer;
            }
        }

    }
    .stats{
        position: absolute;
        width: 100%;
        background-color: var(--dark-gray);
        bottom: 0;
        left: 0;
        padding: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        @media screen and (max-width: 550px){
                gap: 0.5rem;
            }
        p{
            font-size: 1.5rem;
            padding-left: 2rem;
            @media screen and (max-width: 940px){
                font-size: clamp(1rem, 2.3vw, 1.5rem);
            }
            @media screen and (max-width: 550px){
                text-align: center;
                padding-left: 0.5rem;
            }
            span{
                font-size: 2rem;
                font-weight: 700;
                @media screen and (max-width: 940px){
                font-size: clamp(1.5rem, 3vw, 2rem);
            }
            }
            &:not(:first-child){
                border-left: 2px solid #888;
            }
        }
    }
`

const Hero = () => {
    return (
        <StyledHero>
            <div className="container">
                <p className="header">Order Takeaway or Delivery Food</p>
                <p className="sub">Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.
                </p>
                <div className="input-container">
                    <input type="text" placeholder='Your address or postal code'/>
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="stats">
                <p><span>2650</span> Restaurant</p>
                <p><span>5350</span> People Served</p>
                <p><span>12350</span> Registered Users</p>
            </div>
        </StyledHero>
    )
}

export default Hero
