import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

// Components
import Header from './Header'

// Styles
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Luckiest+Guy');
  @import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:focus {
      outline: dashed;
      outline-width: .5px;
    }
    &::selection {
      background-color: #ddd;
    }
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
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
{/*           <html lang="pt-BR" /> */}
{/*  */}
{/*           <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" /> */}
{/*  */}
{/*           <link rel="preconnect" href="https://codepen.io/" /> */}
{/*  */}
{/*           <link rel="preload" as="image" href={imgUrlIcon} /> */}
{/*           <link rel="preload" as="image" href={imgUrlEffect} /> */}
{/*           <link rel="preload" as="image" href={imgUrlLogo} /> */}
{/*           <link rel="preload" as="image" href={imgUrlLogo} /> */}
{/*           <link rel="preload" as="image" href={imgUrlSocialGithub} /> */}
{/*           <link rel="preload" as="image" href={imgUrlSocialNpm} /> */}
{/*           <link rel="preload" as="image" href={imgUrlSocialPaypal} /> */}
{/*           <link rel="preload" as="image" href={imgUrlSocialTwitter} /> */}
{/*  */}
{/*           <meta name="author" content={data.site.siteMetadata.author} /> */}
{/*           <meta name="description" content={data.site.siteMetadata.description} /> */}
{/*  */}
{/*           <meta property="og:url" content="https://piii.js.org/" /> */}
{/*           <meta property="og:title" content={data.site.siteMetadata.title} /> */}
{/*           <meta property="og:description" content={data.site.siteMetadata.description} /> */}
{/*  */}
{/*           <meta name="twitter:card" content="summary" /> */}
{/*           <meta name="twitter:site" content="@theuves" /> */}
{/*           <meta name="twitter:title" content={data.site.siteMetadata.title} /> */}
{/*           <meta name="twitter:description" content={data.site.siteMetadata.title} /> */}
{/*  */}
{/*           <link rel="canonical" href="https://piii.js.org/" /> */}
{/*           <link rel="favicon" href={imgUrlIcon} /> */}
        </Helmet>

        <GlobalStyles />

        <main>
          {children}
        </main>
      </Fragment>
    )}
  />
)
