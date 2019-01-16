import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Installation from '../components/Installation'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <Header />
    <Navbar />
    <Features />
    <Installation />
    <Footer />
  </Layout>
)