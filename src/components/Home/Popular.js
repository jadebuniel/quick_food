import React from 'react'
import styled from 'styled-components'
import RestaurantCard from './RestaurantCard'

export const data = [
    {
        name: 'Taco Mexican',
        category: 'Mexican / American',
        address: '35 Newtownards Road, Belfast, BT4',
        open: 'Opens at 17:00'
    },
    {
        name: 'Naples Pizza',
        category: 'Italian / Pizza',
        address: '35 Newtownards Road, Belfast, BT4',
        open: 'Opens at 17:00'
    },
    {
        name: 'Japan Food',
        category: 'Sushi / Japanese',
        address: '35 Newtownards Road, Belfast, BT4',
        open: 'Opens at 17:00'
    },
    {
        name: 'Sushi Gold',
        category: 'Sushi / Japanese',
        address: '35 Newtownards Road, Belfast, BT4',
        open: 'Opens at 17:00'
    },
    {
        name: 'Dragon Tower',
        category: 'Chinese / Thai',
        address: '35 Newtownards Road, Belfast, BT4',
        open: 'Opens at 17:00'
    },
    {
        name: 'China Food',
        category: 'Chinese / Vietnam',
        address: '35 Newtownards Road, Belfast, BT4',
        open: 'Opens at 17:00'
    },
]

const StyledPopular = styled.div`
    max-width: 19200px;
    margin: 0 auto;
    .container{
        max-width: 1500px;
        margin: 0 auto;
        padding: 5rem 3rem;
        @media screen and (max-width: 600px){
            padding: 5rem 1rem;
        }

        .header{
            font-size: 3.5rem;
            font-weight: 300;
            color: var(--gray);
            white-space: nowrap;
            text-align: center;
            @media screen and (max-width: 950px){
                font-size: clamp(2rem, 6.5vw, 3.5rem);
                white-space: normal;
            }
        }
        .sub{
            color: var(--gray);
            margin-top: 0.5rem;
            font-size: 1.25rem;
            text-align: center;
            @media screen and (max-width: 660px){
                font-size: clamp(0.8rem, 2.5vw, 1.25rem);
            }
        }
        .grid{
            margin-top: 5rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 2rem;
            @media screen and (max-width: 1260px){
                grid-template-columns: 1fr;
            }
        }
    }
    `

const Popular = () => {
    return (
        <StyledPopular>
            <div className="container">
                <p className="header">Choose from Most Popular</p>
                <p className="sub">Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                <div className="grid">
                    {data.map((da, index) => (
                        <RestaurantCard home={true} data={da} key={index} />
                    ))}
                </div>
            </div>
        </StyledPopular>
    )
}

export default Popular
