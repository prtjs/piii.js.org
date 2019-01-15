import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const features = [
  {
    emoji: 'metal',
    description: 'Ignorar se a caixa é alta ou baixa.',
  },
  {
    emoji: 'wine_glass',
    description: 'Ignorar uso de acentuaçòes.',
  },
  {
    emoji: 'nail_care',
    description: 'Gerenciar um alfabeto personalizado.',
  },
  {
    emoji: 'dancers',
    description: 'Ignorar se as letras estão repetidas.',
  },
  {
    emoji: 'lipstick',
    description: 'Criar um filtro personalizado.',
  },
  {
    emoji: 'muscle',
    description: 'Manipular palavrão antes de filtrá-lo.',
  },
]

const ImgEmoji = ({ emoji, style }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: {
          relativePath: {
            regex: "/emojis/.*.png/"
          }
        }) {
          edges {
            node {
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      return (
        <Img
          style={style}
          fluid={data
          .allFile
          .edges
          .find(({ node }) => node.name === emoji)
          .node
          .childImageSharp
          .fluid}
        />
      )
    }}
  />
)

const StyledGrid = styled.div`
  display: grid;
  margin: 0 auto 80px auto;
  width: 800px;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 25px;
`

const StyledGridItem = styled.div`
  text-align: center;
`

const StyledDescription = styled.h2`
  font-weight: normal;
  color: #333;
`

const Features = () => (
  <StyledGrid>
    {features.map((feature, index) => (
      <StyledGridItem key={index}>
        <ImgEmoji
          style={{
            margin: '0 auto',
            width: '80px'
          }}
          emoji={feature.emoji}
        />
        <StyledDescription>
          {feature.description}
        </StyledDescription>
      </StyledGridItem>
    ))}
  </StyledGrid>
)

export default Features
