import React from 'react'
import HowCards from '../components/Home/HowCards'
import RestaurantCard from '../components/Home/RestaurantCard'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Hero from '../components/Home/Hero'
import HowItWorks from '../components/Home/HowItWorks'
import Popular from '../components/Home/Popular'
import AllRestaurants from '../components/Home/AllRestaurants'
import Deliver from '../components/Home/Deliver'

const Grid = styled.div`
    max-width: 1600px;
    grid-gap: 2.5rem;
    margin: 0 auto;
    padding: 0 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const Home = () => {
    return (
        <Layout>
        <Hero/>
        <HowItWorks/>
        <Popular/>
        <AllRestaurants/>
        <Deliver/>
        </Layout>
    )
}

export default Home
