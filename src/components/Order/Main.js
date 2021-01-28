import React from 'react'
import styled from 'styled-components'
import Help from '../Details/Help'
import DeliverSecure from './DeliverSecure'
import Summary from '../Details/Summary'
import FieldWithLabel from './FieldWithLabel'

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
        grid-template-columns: 0.45fr 1fr 0.45fr;

        @media screen and (max-width: 1000px){
            grid-template-columns: 1fr;
        }
        @media screen and (max-width: 600px){
            padding: 5rem 1rem;
        }
        .second-col{
            .head{
                padding: 1rem 1.5rem;
                background-color: #78CFCF;
                color: white;
                font-weight: 700;
                font-size: 1.25rem;
            }
            .form{
                display: flex;
                flex-direction: column;
                background-color: white;
                padding: 0 1.5rem 2rem 1.5rem;
                .flex{
                    display: flex;
                    gap: 2rem;
                }
            }
        }
    }
    hr{
            display: block;
            border: none;
            border-top: 2px solid var(--light-gray);
            margin: 3rem 0 0.5rem 0;
        }
`

const Main = () => {
    return (
        <StyledMain>
            <div className="container">
                <div className="first-col">
                    <DeliverSecure />
                    <Help />
                </div>
                <div className="second-col">
                    <p className="head">Your order details</p>
                    <form className="form">
                        <FieldWithLabel  id={"firstname"} label={"First name"} type={'text'} placeholder={"First name"}/>
                        <FieldWithLabel  id={"lastname"} label={"Last name"} type={'text'} placeholder={"Last name"}/>
                        <FieldWithLabel  id={"telephone"} label={"Telephone/mobile"} type={'text'} placeholder={"Telephone/mobile"}/>
                        <FieldWithLabel  id={"email"} label={"Email"} type={'text'} placeholder={"Email"}/>
                        <FieldWithLabel  id={"address"} label={"Your full address"} type={'text'} placeholder={"Your full address"}/>
                        <div className="flex">
                            <FieldWithLabel  id={"city"} label={"City"} type={'text'} placeholder={"City"}/>
                            <FieldWithLabel  id={"postal"} label={"Postal code"} type={'text'} placeholder={"Postal code"}/>
                        </div>
                        <hr/>
                        <div className="flex">
                            <FieldWithLabel  id={"delivery-day"} label={"Delivery Day"} type={'text'} placeholder={"Select a Day"}/>
                            <FieldWithLabel  id={"deliver-time"} label={"Delivery Time"} type={'text'} placeholder={"Select time"}/>
                        </div>
                        <hr/>
                        <FieldWithLabel  id={"notes"} label={"Notes for the restaurant"} type={'textarea'} placeholder={"Ex. Allergies, cash change..."}/>

                    </form>

                </div>
                <div className="third-col">
                    <Summary details={false} />
                </div>
            </div>
        </StyledMain>
    )
}

export default Main
