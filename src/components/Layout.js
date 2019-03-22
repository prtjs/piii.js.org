import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// Components
import Header from './Header'
import StyledGlobal from './styled/StyledGlobal'

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

        <StyledGlobal />

        <main>
          {children}
        </main>
      </Fragment>
    )}
  />
)
