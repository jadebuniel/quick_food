import React from 'react'
import Header from '../components/Details/Header'
import Help from '../components/Details/Help'
import Layout from '../components/Layout'
import BreadCrumb from '../components/Restaurants/BreadCrumb'
import styled from 'styled-components'
import Summary from '../components/Details/Summary'
import Main from '../components/Details/Main'
import Filter, {Button} from '../components/Details/Filter'

const Grid = styled.div`
    display: grid;
    grid-template-columns: 0.45fr 1fr 0.45fr;
    max-width: 1500px;
    margin: 0 auto;
    padding: 5rem 3rem;
    background-color: whitesmoke;
    grid-gap: 2rem;
    @media screen and (max-width: 1000px){
            grid-template-columns: 1fr;
        }
        @media screen and (max-width: 600px){
            padding: 5rem 1rem;
        }
`

const Details = () => {
    return (
        <Layout>
            <Header />
            <BreadCrumb />
            <Grid>
                <div>
                    <Button>back to search</Button>
                    <Filter />
                    <Help />
                </div>
                <Main />
                <Summary details={true}/>
            </Grid>
        </Layout>
    )
}

export default Details
