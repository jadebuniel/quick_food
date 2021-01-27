import React from 'react'
import styled from 'styled-components'
import home1 from '../../assets/home1.svg'
import home2 from '../../assets/home2.svg'
import home3 from '../../assets/home3.svg'
import home4 from '../../assets/home4.svg'
import HowCards from './HowCards'
import minutesbg from '../../assets/minutesbg.svg'

const data = [
    {
        number: 1,
        image: home1,
        header: 'Search by address',
        sub: 'Find all restaurants available in your zone.'

    },
    {
        number: 2,
        image: home2,
        header: 'Choose a restaurant',
        sub: 'We have more than 1000s of menus online.'

    },
    {
        number: 3,
        image: home3,
        header: 'Pay by card or cash',
        sub: `It's quick, easy and totally secure.`

    },
    {
        number: 4,
        image: home4,
        header: 'Delivery or takeaway',
        sub: 'You are lazy? Are you backing home?'

    },
]

const StyledHow = styled.div`
    background-color: whitesmoke;
    max-width: 19200px;
    margin: 0 auto;
    .container{
        max-width: 1500px;
        margin: 0 auto;
        padding: 5rem 3rem;
        text-align: center;

        .header{
            font-size: 3.5rem;
            font-weight: 300;
            color: var(--gray);
            white-space: nowrap;
            @media screen and (max-width: 950px){
                font-size: clamp(2rem, 6.5vw, 3.5rem);
                white-space: normal;
            }
        }
        .sub{
            color: var(--gray);
            margin-top: 0.5rem;
            font-size: 1.25rem;
            @media screen and (max-width: 660px){
                font-size: clamp(0.8rem, 2.5vw, 1.25rem);
            }
        }
        .grid{
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: space-around;
            margin: 0 auto;
            margin-top: 3rem;
        }
        .minutes{
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 3rem;
            .left, .right{
                position: relative;
                display: inline-block;
                .number{
                    position: absolute;
                    top: 0;
                    left: 0;
                    font-size: 4rem;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    color: var(--dark-gray);
                }
            }
        }
        .minutes-text{
            margin-top: 0.5rem;
            color: var(--dark-gray);
            font-size: 1.25rem;
            font-weight: 700;
            @media screen and (max-width: 660px){
                font-size: clamp(0.8rem, 2.5vw, 1.25rem);
            }
        }
    }
`

const HowItWorks = () => {
    return (
        <StyledHow>
            <div className="container">
                <p className="header">How it Works</p>
                <p className="sub">Cum doctus civibus efficiantur in imperdiet deterruisset.
                </p>
                <div className="grid">
                    {data.map((da, index) => (
                        <HowCards data={da} key={index} />
                    ))}
                </div>
                <div className="minutes">
                    <div className="left">
                        <img src={minutesbg}/>
                        <p className="number">2</p>
                    </div>
                    <div className="right">
                        <img src={minutesbg}/>
                        <p className="number">5</p>
                    </div>
                </div>
                <p className="minutes-text">The minutes that usually takes to deliver!</p>
            </div>
        </StyledHow>
    )
}

export default HowItWorks
