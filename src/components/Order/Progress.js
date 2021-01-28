import React from 'react'
import styled from 'styled-components'

const StyledProgress = styled.div`
    width: 100%;
    max-width: 1000px;
    background-color: white;
    height: 10px;
    margin: 0 auto;
    margin-top: 5rem;
    overflow: visible;
    position: relative;
    .stage{
        position: absolute;
        display: flex;
        top: -55px;
        left: -50px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        @media screen and (max-width: 745px){
               top: -50px; 
        }
        @media screen and (max-width: 425px){
               top: -45px;
            }
        p{
            white-space: nowrap;
            font-size: 1.25rem;
            @media screen and (max-width: 745px){
                font-size: 1rem;
            }
            @media screen and (max-width: 425px){
                font-size: 0.8rem;
            }
        }
        .outer{
            width: 40px;
            height: 40px;
            background-color: #FAE7A9;
            border-radius: 50%;
            position: relative;
            .inner{
                width: 20px;
                height: 20px;
                background-color: #E04F67;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 50%;
                position: absolute;
            }
        }
    }
    .stage.inactive.second{
        top: -55px;
        left: 50%;
        transform: translateX(-50%);
        @media screen and (max-width: 745px){
               top: -50px; 
        }
        @media screen and (max-width: 425px){
               top: -45px;
            }
        .outer{
            background-color: white;
            .inner{
                background-color: white;
            }
        }
    }
    .stage.inactive.third{
        top: -55px;
        left: 95%;
        @media screen and (max-width: 745px){
               top: -50px; 
        }
        @media screen and (max-width: 425px){
               top: -45px;
            }
        .outer{
            background-color: white;
            .inner{
                background-color: white;
            }
        }
    }
`

const Progress = () => {
    return (
        <StyledProgress>
            <div className="stage">
                <p><strong>1.</strong> Your details</p>
                <span className="outer">
                    <span className="inner"></span>
                </span>
            </div>
            <div className="stage inactive second">
                <p><strong>2.</strong> Payment</p>
                <span className="outer">
                    <span className="inner"></span>
                </span>
            </div>
            <div className="stage inactive third">
                <p><strong>3.</strong> Finish!</p>
                <span className="outer">
                    <span className="inner"></span>
                </span>
            </div>
        </StyledProgress>
    )
}

export default Progress
