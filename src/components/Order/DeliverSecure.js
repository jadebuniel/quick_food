import React from 'react'
import styled from 'styled-components'
import clock from '../../assets/clock.svg'
import card from '../../assets/card.svg'

const StyledDeliverSecure = styled.div`
    background-color: white;
    width: 100%;
    padding: 2rem;
    margin-bottom: 2rem;
    .first, .second{
        .header{
            display: flex;
            justify-content: space-between;
            .title{
                font-size: 1.5rem;
                font-weight: 700;
                color: var(--dark-gray);
            }
            img{
                width: 25px;
            }
        }
        .body{
            margin-top: 1rem;
            color: var(--text-lighter);
        }
    }
    hr{
            display: block;
            border: none;
            border-top: 2px solid var(--light-gray);
            margin: 2rem 0;
        }
`

const DeliverSecure = () => {
    return (
        <StyledDeliverSecure>
            <div className="first">
                <div className="header">
                    <p className="title">Deliver time</p>
                    <img src={clock} alt="clock"/>
                </div>
                <p className="body">Lorem ipsum dolor sit amet, in pri partem essent. Qui debitis meliore ex, tollit debitis conclusionemque te eos.</p>
            </div>
            <hr/>
            <div className="second">
                <div className="header">
                    <p className="title">Secure payment</p>
                    <img src={card} alt="card"/>
                </div>
                <p className="body">Lorem ipsum dolor sit amet, in pri partem essent. Qui debitis meliore ex, tollit debitis conclusionemque te eos.</p>
            </div>
        </StyledDeliverSecure>
    )
}

export default DeliverSecure
