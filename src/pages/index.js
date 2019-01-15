import React, { Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Installation from '../components/Installation'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', Verdana, Arial, sans-serif;
  }
`

export default () => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <Navbar />
    <Features />
    <Installation />
  </Fragment>
)