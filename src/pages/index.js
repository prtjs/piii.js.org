import React, { Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../components/Header'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

export default () => (
  <Fragment>
    <GlobalStyle />
    <Header />
  </Fragment>
)