import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const orders = [
    {
        name: 'Enchilladas',
        quantity: 1,
        price: "$11"
    },
    {
        name: 'Burrito',
        quantity: 2,
        price: "$14"
    },
    {
        name: 'Chicken',
        quantity: 1,
        price: "$20"
    },
    {
        name: 'Corona Beer',
        quantity: 2,
        price: "$9"
    },
    {
        name: 'Cheese Cake',
        quantity: 2,
        price: "$12"
    },
]

const StyledSummary = styled.div`
    border: 1px solid var(--light-gray);
    background-color: white;
    /* max-height: 639px; */
    max-height: ${({details}) => details ? "639px" : "unset"};
    
    .title{
        font-weight: 700;
        font-size: 1.5rem;
        padding: 0.8rem 1.5rem;
        background-color: whitesmoke;
    }
    .first{
        background-color: white;
        padding: 1rem 1.5rem;
        .order-item{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            &:not(:first-child){
                margin-top: 1.5rem;
            }
            .button-minus{
                border: none;
                background-color: var(--light-gray);
                padding: 0.5rem;
                padding-top: 6px;
                height: 25px;
                width: 25px;
                border-radius: 50%;
                color: white;
                display: grid;
                place-items: center;
                outline: none;
                cursor: pointer;
            }
            .order-details{
                display: flex;
                justify-content: space-between;
                width: 100%;
                .name-quantity{
                    .quantity{
                        font-weight: 700;
                        margin-right: 5px;
                    }
                }
                .price{
                    font-weight: 700;
                }
            }
        }
    }
    hr{
            display: block;
            border: none;
            border-top: 2px solid whitesmoke;
            margin: 1rem 0 1rem 0 !important;
    }
    .second{
        display: flex;
        justify-content: space-between;
        padding: 0 1.5rem;
        .option-container{
            display: flex;
            align-items: center;
            gap: 0.8rem;
            .checkbox{
                width: 25px;
                height: 25px;
                cursor: pointer;
                &:checked{
                    background-color: var(--dark-gray);
                }
            }
            .option{
                font-weight: 700;
            }
        }
    }
    .third{
        padding: 0 1.5rem;
        p{
            display: flex;
            justify-content: space-between;
            &:not(:first-child){
                margin-top: 1.5rem;
            }
        }
        .total{
            font-size: 1.5rem;
            font-weight: 700;
        }
    }
    .fourth{
        padding: 0 1.5rem;
        text-align: center;
        padding-bottom: 2rem;
        .order, .checkout{
            width: 100%;
            padding: 1rem;
            border: none;
            outline: none;
            text-transform: uppercase;
            font-weight: 700;
            color: white;
            font-size: 1.25rem;
            background-color: #EC008C;
            border-radius: 5px;
            cursor: pointer;
        }
        .add-other{
            width: 100%;
            padding: 1rem;
            border: none;
            outline: none;
            text-transform: uppercase;
            font-weight: 700;
            color: #EC008C;
            font-size: 1rem;
            border: 3px solid #EC008C;
            background: none;
            border-radius: 5px;
            margin-top: 1rem;
            cursor: pointer;
        }
    }
`

const Summary = ({details}) => {
    const history = useHistory()
    return (
        <StyledSummary details={details}>
            <p className="title">Your order</p>
            <div className="first">
                {orders.map((order, index) => (
                    <div className="order-item" key={index}>
                        <button className="button-minus"><span className="fas fa-minus"></span></button>
                        <p className="order-details">
                            <span className="name-quantity"><span className="quantity">{order.quantity}x </span> {order.name}</span>
                            <span className="price">{order.price}</span>
                        </p>
                    </div>
                ))}
            </div>
            <hr/>
            <div className="second">
                <div className="option-container">
                    <input type="checkbox" className="checkbox"/>
                    <p className="option">Delivery</p>
                </div>
                <div className="option-container">
                    <input type="checkbox" className="checkbox" />
                    <p className="option">Takeaway</p>
                </div>
            </div>
            <hr/>
            <div className="third">
                <p className="subtotal">Subtotal <span>$56</span></p>
                <p className="delivery">Delivery Fee <span>$10</span></p>
                <p className="total">TOTAL <span>$99</span></p>
            </div>
            <hr/>
            <div className="fourth">
                {details ? (
                    <button className="order" onClick={() => history.push('/order')}>order now</button>
                ) : (
                    <>
                    <button className="checkout">go to checkout</button>
                    <button className="add-other"><span className="fas fa-arrow-left"></span> add other items</button>
                    </>
                )}
            </div>
        </StyledSummary>
    )
}

export default Summary
