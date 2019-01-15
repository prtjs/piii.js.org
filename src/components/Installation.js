import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ImgScreenshot = ({ style }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "screenshot.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Img
        style={style}
        fluid={data.file.childImageSharp.fluid}
      />
    )}
  />
)

const StyledSection = styled.section`
  margin-bottom: 320px;
  padding: 80px 0;
  text-align: center;
  background-color: #eee;
`

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 750px;
`

const StyledTitle = styled.h1`
  margin: 0 0 30px 0;
  font-size: 2.5em;
`

const StyledCommand = styled.code`
  box-sizing: border-box;
  display: inline-block;
  margin-bottom: 75px;
  padding: 10px 30px;
  border-radius: 3px;
  font-family: 'Dank Mono', 'Fira Code', Consolas, monospace;
  font-size: 1.5em;
  background-color: black;
  color: white;
`

const Installation = () => (
  <StyledSection>
    <StyledContainer>
      <StyledTitle>
        Instalação
      </StyledTitle>
      <StyledCommand>
        npm install --save piii
      </StyledCommand>
      <ImgScreenshot style={{ marginBottom: '-40%' }} />
    </StyledContainer>
  </StyledSection>
)

export default Installation