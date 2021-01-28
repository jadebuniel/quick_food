import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    border: none;
    border: 3px solid #EC008C;
    width: 40px;
    height: 40px;
    background: none;
    color: #EC008C;
    border-radius: 50%;
    font-size: 1.5rem;
    outline: none;
    cursor: pointer;
`
const Button = () => {
    return(
        <StyledButton>
            <span className="fas fa-plus"></span>
        </StyledButton>
    )
}

const StyledMain = styled.div`
    .head{
            padding: 1rem 1.5rem;
            background-color: #78CFCF;
            color: white;
            font-weight: 700;
            font-size: 1.25rem;
        }
    .title{
        margin-top: 0.5rem;
        font-size: 1.8rem;
        color: var(--dark-gray);
        font-weight: 700;
    }
    .sub{
        margin-top: 1rem;
        color: var(--text-lighter);
        font-size: 1.05rem;
    }
    .main{
        background-color: white;
        padding: 1rem 1.5rem;
            .starters, .maincourse, .desserts{
                &:not(:first-child){
                    margin-top: 2rem;
                }
                #order {
                    font-family: Arial, Helvetica, sans-serif;
                    border-collapse: collapse;
                    width: 100%;
                    margin-top: 2rem;
                    }

                    & td{
                        border-bottom: 1px solid #ddd;
                        padding: 2rem 1rem;
                        .dishName{
                            font-weight: 700;
                            font-size: 1.2rem;
                        }
                        .sub{
                            margin-top: 5px;
                            font-size: 17px;
                            font-weight: 500;
                        }
                        .price{
                            font-weight: 700;
                        }
                    }
                    & th{
                        border-bottom: 2px solid #aaa;
                        padding: 8px;
                    }

                    & tr:nth-child(odd){background-color: #f2f2f2;}

                    & tr:hover {background-color: #f9f9f9;}

                    & th {
                    padding-top: 12px;
                    padding-bottom: 12px;
                    text-align: left;
                    background-color: #fff;
                    color: var(--dark-gray);
                }
            }
    }
`

const Main = () => {
    return (
        <StyledMain>
            <p className="head">Menu</p>
            <div className="main">
                <div className="starters">
                    <p className="title">STARTERS</p>
                    <p className="sub">Te ferri iisque aliquando pro, posse nonumes efficiantur in cum. Sensibus reprimique eu pro. Fuisset mentitum deleniti sit ea.</p>
                    <table id='order'>
                        <thead>
                            <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>
                                <p className="dishName">1. Mexican Enchilladas</p>
                                <p className="sub">Fuisset mentitum deleniti sit ea.</p>
                            </td>
                            <td><p className="price">€ 9,40</p></td>
                            <td><Button /></td>
                            </tr>
                            <tr>
                            <td>
                                <p className="dishName">2. Fajitas</p>
                                <p className="sub">Fuisset mentitum deleniti sit ea.</p>
                            </td>
                            <td><p className="price">€ 9,40</p></td>
                            <td><Button /></td>
                            </tr>
                            <tr>
                            <td>
                                <p className="dishName">3. Royal Fajitas</p>
                                <p className="sub">Fuisset mentitum deleniti sit ea.</p>
                            </td>
                            <td><p className="price">€ 9,40</p></td>
                            <td><Button /></td>
                            </tr>
                            <tr>
                            <td>
                                <p className="dishName">4. Chicken Enchillada Wrap</p>
                                <p className="sub">Fuisset mentitum deleniti sit ea.</p>
                            </td>
                            <td><p className="price">€ 9,40</p></td>
                            <td><Button /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="maincourse">
                    <p className="title">MAIN COURSES</p>
                    <p className="sub">Te ferri iisque aliquando pro, posse nonumes efficiantur in cum. Sensibus reprimique eu pro. Fuisset mentitum deleniti sit ea.</p>
                    <table id='order'>
                        <thead>
                            <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>
                                <p className="dishName">5. Cheese Quesadilla</p>
                                <p className="sub">Fuisset mentitum deleniti sit ea.</p>
                            </td>
                            <td><p className="price">€ 9,40</p></td>
                            <td><Button /></td>
                            </tr>
                            <tr>
                            <td>
                                <p className="dishName">6. Chorizo and Cheese</p>
                                <p className="sub">Fuisset mentitum deleniti sit ea.</p>
                            </td>
                            <td><p className="price">€ 9,40</p></td>
                            <td><Button /></td>
                            </tr>
                            <tr>
                            <td>
                                <p className="dishName">7. Beef Taco</p>
                                <p className="sub">Fuisset mentitum deleniti sit ea.</p>
                            </td>
                            <td><p className="price">€ 9,40</p></td>
                            <td><Button /></td>
                            </tr>
                            <tr>
                            <td>
                                <p className="dishName">8. Minced Beef Double Layer</p>
                                <p className="sub">Fuisset mentitum deleniti sit ea.</p>
                            </td>
                            <td><p className="price">€ 9,40</p></td>
                            <td><Button /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="desserts">
                    <p className="title">DESSERTS</p>
                    <p className="sub">Te ferri iisque aliquando pro, posse nonumes efficiantur in cum. Sensibus reprimique eu pro. Fuisset mentitum deleniti sit ea.</p>
                    <table id='order'>
                        <thead>
                            <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Order</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <p className="dishName">1. Mexican Enchilladas</p>
                                <p className="sub">Fuisset mentitum deleniti sit ea.</p>
                            </td>
                            <td><p className="price">€ 9,40</p></td>
                            <td><Button /></td>
                            </tr>
                            <tr>
                            <td>
                                <p className="dishName">2. Fajitas</p>
                                <p className="sub">Fuisset mentitum deleniti sit ea.</p>
                            </td>
                            <td><p className="price">€ 9,40</p></td>
                            <td><Button /></td>
                            </tr>
                            <tr>
                            <td>
                                <p className="dishName">3. Royal Fajitas</p>
                                <p className="sub">Fuisset mentitum deleniti sit ea.</p>
                            </td>
                            <td><p className="price">€ 9,40</p></td>
                            <td><Button /></td>
                            </tr>
                            <tr>
                            <td>
                                <p className="dishName">4. Chicken Enchillada Wrap</p>
                                <p className="sub">Fuisset mentitum deleniti sit ea.</p>
                            </td>
                            <td><p className="price">€ 9,40</p></td>
                            <td><Button /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </StyledMain>
    )
}

export default Main
