import React from 'react'
import styled from 'styled-components'
import { filterObj } from '../../utils'
import { Link as GatsbyLink } from 'gatsby'

const GatsbyLinkForSC = ({ ...props }) => {
  props = filterObj(props, (prop) => !/^sc/.test(prop))

  return <GatsbyLink {...props} />
}

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
const Link = styled(GatsbyLinkForSC)`
  padding: .35em .75em;
  display: block;
  border-radius: 3px;
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: none;
  color: black;

  // Specials
  font-weight: ${props => props.scIsActive ? 'bold' : 'lighter'};
  background-color: ${props => props.scIsActive ? '#ddd' : '#eee'};

  &:hover {
    color: gray;
  }
  &:active {
    color: darkred;
  }
`

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