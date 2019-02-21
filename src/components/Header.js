import React from 'react'
import styled from 'styled-components'

// Public styled components
import Container from './styled/Container'
import Link from './styled/Link'

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
        <Link href='#'>Piii.js</Link>
      </Brand>

      <List>
        <Item>
          <Link href='#'>Documentação</Link>
        </Item>
        <Item>
          <Link href='#'>Código-fonte</Link>
        </Item>
      </List>

    </StyledContainer>
  </StyledHeader>
)

export default Header