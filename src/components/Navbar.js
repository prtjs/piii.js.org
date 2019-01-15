import React from 'react'
import styled from 'styled-components'

const links = [
  {
    title: 'Código-fonte',
    url: 'https://github.com/piiijs/piii.js',
  },
  {
    title: 'Documentação',
    url: 'https://github.com/piiijs/piii.js#readme',
  },
  {
    title: 'Download',
    url: 'https://github.com/piiijs/piii.js/archive/master.zip'
  },
]

const StyledContainer = styled.nav`
  margin-bottom: 120px;
  padding: 20px 0;
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
  font-size: 1.5em;
  text-decoration: none;
  color: white;
`

const Navbar = () => (
  <StyledContainer>
    <StyledMenu>
    {links.map((link, index) => (
      <StyledMenuItem key={index}>
        <StyledLink href={link.url}>
          {link.title}
        </StyledLink>
      </StyledMenuItem>
    ))}
    </StyledMenu>
  </StyledContainer>
)

export default Navbar