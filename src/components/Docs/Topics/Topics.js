import React from 'react'

import {
  List,
  Item,
  Link
} from './Topics.styled'

export default ({ links, currentPath }) => (
  <List>
    {links.map(({ path, title }, index) => (
      <Item key={index}>
        <Link to={path} scIsActive={currentPath === path}>
          {title}
        </Link>
      </Item>
    ))}
  </List>
)