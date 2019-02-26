import React from 'react'
import styled from 'styled-components'

import { Link as GatsbyLink } from 'gatsby'

const List = styled.ul`
  padding: 10px;
  list-style-type: none;
  background-color: #f5f5f5;
`
const Item = styled.li`
  padding: .25em 0;
`
const Link = styled(GatsbyLink)`
  padding: .25em .75em;
  display: block;
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: none;
  background-color: #eee;
`

export default ({ links }) => (
  <List>
    {links.map(({ title, path }) => (
      <Item>
        <Link to={path}>
          {title}
        </Link>
      </Item>
    ))}
  </List>
)