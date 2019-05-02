import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Horray You successfully bought the tshirts</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
