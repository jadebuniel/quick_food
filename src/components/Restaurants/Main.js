import React from 'react'
import styled from 'styled-components'
import onestar from '../../assets/onestar.svg'
import twostars from '../../assets/twostars.svg'
import threestars from '../../assets/threestars.svg'
import fourstars from '../../assets/fourstars.svg'
import fivestars from '../../assets/fivestars.svg'
import bento from '../../assets/bento.svg'
import {data as restaurants} from '../Home/Popular'
import RestaurantCard from '../Home/RestaurantCard'

const StyledMain = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    background-color: whitesmoke;
    margin-top: 2rem;
    .container{
        max-width: 1500px;
        margin: 0 auto;
        padding: 5rem 3rem;
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: 0.33fr 1fr;

        @media screen and (max-width: 1000px){
            grid-template-columns: 1fr;
        }
        @media screen and (max-width: 600px){
            padding: 5rem 1rem;
        }
        .filter{
            display: flex;
            flex-direction: column;
            button{
                width: 100%;
                text-transform: uppercase;
                background-color: var(--dark-gray);
                border: none;
                padding: 1rem;
                color: white;
                border-radius: 5px;
                cursor: pointer;
            }
            .card{
                padding: 1rem;
                background-color: white;
                margin-top: 2rem;
                input{
                    width: 30px;
                    height: 30px;
                    border-color: var(--gray);
                }
                .first{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .fas{
                        font-size: 0.5rem;
                    }
                }
                .second{
                    & > p{
                        margin-bottom: 0.5rem;
                    }
                    .type-item{
                        display: flex;
                        gap: 1rem;
                        align-items: center;
                        margin-top: 5px;
                        .type-name{
                            display: flex;
                            width: 100%;
                            color: var(--text-lighter);
                            span{
                                width: 15px;
                                height: 15px;
                                border-radius: 50%;
                                margin-left: auto;
                            }
                        }
                    }
                }
                hr{
                    margin: 1.5rem 0;
                    display: block;
                    border: none;
                    border-top: 2px solid var(--light-gray);
                }

                .third{
                    & > p{
                        margin-bottom: 0.5rem;
                    }
                    .rating-item{
                        display: flex;
                        gap: 1rem;
                        align-items: center;
                        margin-top: 5px;
                    }
                }
                .fourth{
                    & > p{
                        margin-bottom: 0.5rem;
                    }
                    .option-item{
                        display: flex;
                        gap: 1rem;
                        align-items: center;
                        margin-top: 5px;
                        p{
                            color: var(--text-lighter);
                        }
                    }
                }
            }
        }
        .main{
            .sort{
                display: flex;

            .custom-select{
                position: relative;
                display: inline-block;
                border: 2px solid whitesmoke;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                    select{
                    display: block;
                    width: 60%;
                    padding: 1rem;
                    outline: none;
                    min-width: 230px;
                    cursor: pointer;
                    background-color: white;
                    border: none;
                    }
                    .arrow{
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 3rem;
                        height: 3rem;
                        background-color: white;
                        pointer-events: none;
                        display: grid;
                        place-items: center;
                    }
            }
            .blank{
                flex: 1;
                background-color: white;
                border-top: 2px solid whitesmoke;
                border-bottom: 2px solid whitesmoke;
            }
            .image-container{
                background-color: white;
                padding: 0.5rem 1rem;
                display: grid;
                place-items: center;
                border: 2px solid whitesmoke;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            }
        }
        .list{
            display: flex;
            flex-direction: column;
            gap: 3rem;
            margin-top: 3rem;
        }
        .load{
            margin-top: 3rem;
            text-align: center;
            padding: 1rem;
            border: 3px solid white;
            cursor: pointer;
        }
    }
    }
`

const types = [
    {
        name: 'All(49)',
        color: 'transparent'
    },
    {
        name: 'American(12)',
        color: '#7DCCC7'
    },
    {
        name: 'Chinese(5)',
        color: '#F29BC1'
    },
    {
        name: 'Hamburger(7)',
        color: '#8494C8'
    },
    {
        name: 'Fish(1)',
        color: '#8DC63F'
    },
    {
        name: 'Mexican(49)',
        color: '#84C99E'
    },
    {
        name: 'Pizza(22)',
        color: '#F5977D'
    },
    {
        name: 'Sushi(43)',
        color: '#72D0F4'
    },
]

const ratings = [fivestars, fourstars, threestars, twostars, onestar]
const options = ['Delivery','Take Away','Distance 10Km','Distance 5Km']

const Main = () => {
    return (
        <StyledMain>
            <div className="container">
                <div className="filter">
                    <button>view on map</button>
                    <div className="card">
                        <p className="first">Filters <span className="fas fa-plus"></span></p>
                        <hr/>
                        <div className="second">
                            <p>Type</p>
                            {types.map((type, index) => (
                                <div className="type-item" key={index}>
                                    <input type="checkbox"/>
                                    <p className="type-name">{type.name} <span style={{backgroundColor: type.color}}></span></p>
                                </div>
                            ))}
                        </div>
                        <hr/>
                        <div className="third">
                                <p>Rating</p>
                                {ratings.map((rating, index) => (
                                    <div className="rating-item" key={index}>
                                        <input type="checkbox"/>
                                        <img src={rating} alt="stars"/>
                                    </div>
                                ))}
                        </div>
                        <hr/>
                        <div className="fourth">
                                <p>Options</p>
                                {options.map((option, index) => (
                                    <div className="option-item" key={index}>
                                        <input type="checkbox"/>
                                        <p>{option}</p>
                                    </div>
                                ))}
                        </div>

                    </div>
                </div>
                <div className="main">
                    <div className="sort">
                        <div className="custom-select">
                            <select name="currency" id="currency">
                                <option value="ranking">Sort by ranking</option>
                                <option value="price">Sort by price</option>
                                <option value="location">Sort by location</option>
                            </select>
                            <span className="arrow"><i className="fas fa-chevron-down"></i></span>
                        </div>

                        <span className="blank"></span>
                        <div className="image-container">
                            <img src={bento} alt=""/>
                        </div>
                    </div>

                    <div className="list">
                        {restaurants.map((res, index) => (
                            <RestaurantCard home={false} data={res} key={index} background={'white'} />
                        ))}
                    </div>

                    <p className="load">Load more...</p>

                </div>

            </div>
        </StyledMain>
    )
}

export default Main
