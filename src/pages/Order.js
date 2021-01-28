import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Order/Header'
import Main from '../components/Order/Main'
import BreadCrumb from '../components/Restaurants/BreadCrumb'

const Order = () => {
    return (
        <Layout>
            <Header />
            <BreadCrumb />
            <Main />
        </Layout>
    )
}

export default Order
