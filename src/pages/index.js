import React from 'react'

import Layout from '../components/Layout'

// Page components
import {
  Apresentation,
  ApresentationInfo,
  Informations,
  Features
} from '../components/Home'

export default () => (
  <Layout>
    <Apresentation />
    <ApresentationInfo />
    <Informations />
    <Features />
  </Layout>
)
