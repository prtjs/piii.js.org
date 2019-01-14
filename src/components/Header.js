import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ImgLogo = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.file.childImageSharp.fixed} />}
  />
)

const StyledContainer = styled.header`
  padding: 50px 0;
  text-align: center;
  font-family: 'Segoe UI', Verdana, Arial, sans-serif;
  background-image: linear-gradient(to top, #a2b6d9, #e9ecc4);
`

const StyledTitle = styled.h1`
  margin: 0;
  font-size: 3em;
`

const StyledDescription = styled.p`
  margin: 0 auto;
  width: 300px;
  font-size: 1.25em;
  color: #666;
`

const Header = () => (
  <StyledContainer>
    <ImgLogo />
    <StyledTitle>
      Piii.js
    </StyledTitle>
    <StyledDescription>
      Um avançado filtro de palavrões da língua portuguesa.
    </StyledDescription>
  </StyledContainer>
)

export default Header
