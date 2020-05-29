import React from "react"
// import components
import Layout from '../components/layout'
import PostsList from "../components/postsList"
import Title from "../components/titles"
//import Experiments from "../components/experiments"

import '../style/style.scss'

const IndexPage = () => {

    return (
        <Layout>
            <Title />
            <PostsList />
        </Layout>
    )
}

export default IndexPage
