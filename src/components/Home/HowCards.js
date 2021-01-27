import React from 'react'
import styled from 'styled-components'

const StyledCards = styled.div`
    padding: 3rem 2rem;
    position: relative;
    min-width: 262px;
    max-width: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: white;
    flex: 0 1 260px;
    .bold{
        margin-top: 1rem; 
        font-weight: 700;
    }
    .desc{
        margin-top: 0.5rem;
        font-size: 14px;
        color: var(--text-lighter);
    }
    .number{
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid var(--light-gray);
        display: grid;
        place-items: center;
        background: white;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: 700;
    }
`

const HowCards = ({data}) => {
    return (
        <StyledCards>
           <img src={data.image} alt=""/>
            <p className="bold">{data.header}</p>
            <p className="desc">{data.sub}</p>
            <span className="number">{data.number}</span>
        </StyledCards>
    )
}

export default HowCards
