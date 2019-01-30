import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'

// Components
import Header from './Header'

// Styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Open+Sans+Condensed:300');

  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, Helvetica, Verdana, Arial, sans-serif;
  }
`

const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <main>
      {children}
    </main>
  </Fragment>
)

export default Layout
