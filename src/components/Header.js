import React from 'react'
import styled from 'styled-components'

import Container from './styled/Container'

import { Link as GatsbyLink } from 'gatsby'

/**
 * Componente Link que pode aceitar tanto link interno quanto externo.
 */
const HybridLink = ({ children, ...props }) => {
  if (!props.href) {
    return (
      <GatsbyLink {...props}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a {...props}>
      {children}
    </a>
  )
}

// Styles
const StyledHeader = styled.header`
  padding: 2.5px 0;
  color: white;
  background-color: black;
`
const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Link = styled(HybridLink)`
  font-family: 'Open Sans Condensed', Helvetica, Verdana, Arial, sans-serif;
  text-decoration: none;
  color: white;

  &:hover {
    opacity: .8;
  }
  &:active {
    opacity: .9;
  }
`
const Brand = styled.h1`
  margin: 0;
  font-size: 2.25em;
`
const List = styled.ul`
  display: flex;
  padding: 0;
  list-style-type: none;
`
const Item = styled.li`
  font-size: 1.15em;

  &:not(:last-child) {
    margin-right: 20px;
  }
`

const Header = () => (
  <StyledHeader>
    <StyledContainer>

      <Brand>
        <Link to='/'>Piii.js</Link>
      </Brand>

      <List>
        <Item>
          <Link to='/docs/instalacao'>
            Documentação
          </Link>
        </Item>
        <Item>
          <Link href='https://github.com/piiijs/piii.js'>
            Código-fonte
          </Link>
        </Item>
      </List>

    </StyledContainer>
  </StyledHeader>
)

export default Header