import React from 'react'

// Styles
import {
  StyledHeader,
  Container,
  Brand,
  Link,
  List,
  Item
} from './Header.styled'

const Header = () => (
  <StyledHeader>
    <Container>
      <Brand>
        <Link to='/'>Piii.js</Link>
      </Brand>
      <List>
        <Item>
          <Link href='https://github.com/piiijs/piii.js/releases'>
            v4.0.2
          </Link>
        </Item>
        <Item>
          <Link href='https://github.com/piiijs/piii.js'>
            GitHub
          </Link>
        </Item>
      </List>
    </Container>
  </StyledHeader>
)

export default Header