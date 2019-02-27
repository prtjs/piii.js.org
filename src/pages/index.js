import React from 'react'

import Layout from '../components/Layout'

// Page components
import Apresentation from '../components/Home/Apresentation'
import Examples from '../components/Home/Examples'
import Footer from '../components/Home/Footer'

export default () => (
  <Layout>
    <Apresentation />
    <Examples />
    <Footer />
  </Layout>
)
