import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'

// Components
import Header from './Header'

// Styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Open+Sans+Condensed:300');

  * {
    --blue: #303952;
    --orange-light: #e15f41;
    --orange-dark: #b23e23;
    --orange-dark-2: #d5674d;

    &::selection {
      background-color: #ddd;
    }
  }

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
