import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout > 
            <h1>Home</h1>
            <h2>i'm Thabo, a full-stack developer living in centurion</h2>
            {/* <p>Need a developer?<a href="/contact">Contact me.</a></p>  "this method is slow"*/}
            <p>need a developer near you fast? <Link to="/contact">Contact developer</Link></p>
        </Layout >
    )
}

export default IndexPage