import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

// Components
import Header from './Header'

// Images
import imgUrlIcon from '../images/icon.png'
import imgUrlEffect from '../images/effect.svg'
import imgUrlLogo from '../images/logo.svg'
import imgUrlSocialGithub from '../images/social-icons/github.svg'
import imgUrlSocialNpm from '../images/social-icons/npm.svg'
import imgUrlSocialPaypal from '../images/social-icons/paypal.svg'
import imgUrlSocialTwitter from '../images/social-icons/twitter.svg'

// Styles
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Open+Sans+Condensed:300');

  * {
    --blue: #303952;
    --orange-light: #e15f41;
    --orange-dark: #b23e23;
    --orange-dark-2: #d5674d;

    box-sizing: border-box;

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

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={(data) => (
      <Fragment>
        <Helmet
          encodeSpecialCharacters={true}
          defaultTitle={data.site.siteMetadata.title}
        >
          <html lang="pt-BR" />

          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

          <link rel="preconnect" href="https://codepen.io/" />

          <link rel="preload" as="image" href={imgUrlIcon} />
          <link rel="preload" as="image" href={imgUrlEffect} />
          <link rel="preload" as="image" href={imgUrlLogo} />
          <link rel="preload" as="image" href={imgUrlLogo} />
          <link rel="preload" as="image" href={imgUrlSocialGithub} />
          <link rel="preload" as="image" href={imgUrlSocialNpm} />
          <link rel="preload" as="image" href={imgUrlSocialPaypal} />
          <link rel="preload" as="image" href={imgUrlSocialTwitter} />

          <meta name="author" content={data.site.siteMetadata.author} />
          <meta name="description" content={data.site.siteMetadata.description} />

          <meta property="og:url" content="https://piii.js.org/" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:description" content={data.site.siteMetadata.description} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@theuves" />
          <meta name="twitter:title" content={data.site.siteMetadata.title} />
          <meta name="twitter:description" content={data.site.siteMetadata.title} />

          <link rel="canonical" href="https://piii.js.org/" />
          <link rel="favicon" href={imgUrlIcon} />
        </Helmet>

        <GlobalStyles />

        <Header />

        <main>
          {children}
        </main>
      </Fragment>
    )}
  />
)
