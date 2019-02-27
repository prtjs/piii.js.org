import React from 'react'
import styled from 'styled-components'

import { Link as GatsbyLink } from 'gatsby'

const List = styled.ul`
  margin: 0;
  padding: 10px;
  border-radius: 3px;
  list-style-type: none;
  box-shadow: 1px 1px 1px 0 #ddd;
  background-color: #f6f6f6;

  @media (max-width: 620px) {
    width: 100%;
  }
`
const Item = styled.li`
  padding: .25em 0;
`
const Link = styled(GatsbyLink)`
  padding: .35em .75em;
  display: block;
  border-radius: 3px;
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: none;
  color: black;
  background-color: #eee;

  &:hover {
    color: gray;
  }
  &:active {
    color: darkred;
  }
`

export default ({ links }) => (
  <List>
    {links.map(({ title, path }, index) => (
      <Item key={index}>
        <Link to={path}>
          {title}
        </Link>
      </Item>
    ))}
  </List>
)