import React from 'react'
import styled from 'styled-components'

const links = [
  {
    title: 'Código-fonte',
    url: 'https://github.com/piiijs/piii.js',
  },
  {
    title: 'Documentação',
    url: 'https://piii.js.org/docs/instalacao',
  },
  {
    title: 'Download',
    url: 'https://github.com/piiijs/piii.js/archive/master.zip'
  },
]

const StyledContainer = styled.nav`
  margin-bottom: ${props => props.marginBottom || '120'}px;
  padding: ${props => props.paddingY || '20'}px 0;
  background-color: black;
`

const StyledMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-align: center;
`

const StyledMenuItem = styled.li`
  padding: 0 20px;
  display: inline-block;
`

const StyledLink = styled.a`
  font-size: ${props => props.fontSize || '1.5'}em;
  text-decoration: none;
  color: white;
`

const Navbar = ({
  marginBottom,
  fontSize,
  paddingY
}) => (
  <StyledContainer
    marginBottom={marginBottom}
    paddingY={paddingY}
  >
    <StyledMenu>
    {links.map((link, index) => (
      <StyledMenuItem key={index}>
        <StyledLink
          fontSize={fontSize}
          href={link.url}
        >
          {link.title}
        </StyledLink>
      </StyledMenuItem>
    ))}
    </StyledMenu>
  </StyledContainer>
)

export default Navbar