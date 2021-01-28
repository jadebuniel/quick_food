import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    text-transform: uppercase;
    width: 100%;
    border: none;
    outline: none;
    background-color: var(--dark-gray);
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1rem;
`

export const Button = (props) => {
    return(
        <StyledButton>
            {props.children}
        </StyledButton>
    )
}

const filters = [
    {
        category: 'Starters',
        quantity: '(141)'
    },
    {
        category: 'Main Courses',
        quantity: '(20)'
    },
    {
        category: 'Beef',
        quantity: '(12)'
    },
    {
        category: 'Desserts',
        quantity: '(11)'
    },
    {
        category: 'Drinks',
        quantity: '(20)'
    },
]

const StyledFilter = styled.div`
    width: 100%;
    background-color: white;
    margin-top: 2rem;
    .filter-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem;
        cursor: pointer;
        p{
            color: var(--dark-gray);
            .quantity{
                color: var(--text-lighter);
            }
        }
        .fas{
            color: var(--dark-gray);
        }
    }
`

const Filter = () => {
    return (
        <StyledFilter>
            {filters.map((filter, index) => (
                <div className="filter-item" key={index}>
                    <p>{filter.category} <span className="quantity">{filter.quantity}</span></p>
                    <span className="fas fa-chevron-right"></span>
                </div>
            ))}
        </StyledFilter>
    )
}

export default Filter
