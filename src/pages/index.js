import React, { Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

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
  </Fragment>
)