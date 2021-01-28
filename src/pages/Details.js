import React from 'react'
import Header from '../components/Details/Header'
import Help from '../components/Details/Help'
import Layout from '../components/Layout'
import BreadCrumb from '../components/Restaurants/BreadCrumb'
import styled from 'styled-components'
import Summary from '../components/Details/Summary'
import Main from '../components/Details/Main'

const Test = styled.div`
    display: grid;
    grid-template-columns: 0.4fr 1fr 0.4fr;
    max-width: 1500px;
    margin: 0 auto;
    padding: 5rem 3rem;
    background-color: whitesmoke;
    grid-gap: 2rem;
`

const Details = () => {
    return (
        <Layout>
            <Header />
            <BreadCrumb />
            <Test>
                <Help />
                <Main />
                <Summary details={true}/>
            </Test>
        </Layout>
    )
}

export default Details
