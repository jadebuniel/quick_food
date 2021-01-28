import React from 'react'
import Layout from '../components/Layout'
import BreadCrumb from '../components/Restaurants/BreadCrumb'
import Header from '../components/Restaurants/Header'
import Main from '../components/Restaurants/Main'
import Map from '../components/Restaurants/Map'

const Restaurants = () => {
    return (
        <Layout>
            <Header/>
            <BreadCrumb/>
            <Map/>
            <Main/>
        </Layout>
    )
}

export default Restaurants
