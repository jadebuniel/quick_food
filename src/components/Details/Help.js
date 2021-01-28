import React from 'react'
import styled from 'styled-components'
import help from '../../assets/help.svg'

const StyledHelp = styled.div`
    background-color: white;
    padding: 1rem 2rem;
    text-align: center;
    max-height: 280px;
    .title{
        font-size: 2rem;
        margin-top: 1rem;
        white-space: nowrap;
    }
    .mobile{
        font-size: 2rem;
        color: #85C99D;
        margin-top: 1rem;
        white-space: nowrap;
    }
    .sched{
        margin-top: 2rem;
        white-space: nowrap;
    }
`

const Help = () => {
    return (
        <StyledHelp>
            <img src={help} alt="help"/>
            <p className="title">Need help?</p>
            <p className="mobile">+45 423 445 99</p>
            <p className="sched">Monday to Friday 9.00am - 7.30pm</p>
        </StyledHelp>
    )
}

export default Help
