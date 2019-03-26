import styled from 'styled-components'

import { GatsbyLinkForSC } from './Topics.utils'

export const List = styled.ul`
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
export const Item = styled.li`
  padding: .25em 0;
`
export const Link = styled(GatsbyLinkForSC)`
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