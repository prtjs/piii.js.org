import styled, { css } from 'styled-components'
import { GatsbyLinkForSC } from './Topics.utils'

// Design
import { orange, blue, purple } from '../../design/colors'

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
  padding: .5em .9em;
  display: block;
  border-radius: 3px;
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: none;
  color: black;

  // Specials
  ${({ scIsActive }) => {
    if (scIsActive) {
      return css`
        background-image: linear-gradient(45deg, ${blue}, ${purple});
        color: white;
      `
    }

    return css`
      background-color: #ddd;
    `
  }}

  &:hover {
    color: ${({ scIsActive }) => scIsActive ? '#eee' : 'gray'}
  }
  &:active {
    color: ${orange};
  }
`