import styled from 'styled-components'

const Link = styled.a`
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

export default Link
