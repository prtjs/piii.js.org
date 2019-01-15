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
  padding: 80px 0;
  text-align: center;
  background-image: linear-gradient(to top, #a2b6d9, #e9ecc4);
`

const StyledTitle = styled.h1`
  margin: 5px 0;
  font-size: 3.5em;
`

const StyledDescription = styled.p`
  margin: 0 auto;
  width: 400px;
  font-size: 1.5em;
  line-height: 150%;
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
