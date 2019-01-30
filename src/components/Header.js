import React from 'react'
import styled from 'styled-components'

// Components
import Container from './Container'

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
const StyledTitle = styled.h1`
  margin: 0;
  font-size: 2.25em;
`
const StyledLink = styled.a`
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
const StyledList = styled.ul`
  display: flex;
  padding: 0;
  list-style-type: none;
`
const StyledItem = styled.li`
  font-size: 1.15em;

  &:not(:last-child) {
    margin-right: 20px;
  }
`

const Header = () => (
  <StyledHeader>
    <StyledContainer>
      <StyledTitle>
        <StyledLink href='#'>Piii.js</StyledLink>
      </StyledTitle>
      <StyledList>
        <StyledItem>
          <StyledLink href='#'>Documentação</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink href='#'>Código-fonte</StyledLink>
        </StyledItem>
      </StyledList>
    </StyledContainer>
  </StyledHeader>
)

export default Header