import styled from 'styled-components'
import StyledContainer from '../styled/StyledContainer'
import HybridLink from '../HybridLink'

// Design
import { orange, purple, blue } from '../design/colors'


export const StyledHeader = styled.header`
  padding: 10px 0;
  position: relative;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, .25);
  color: white;
  background-image: linear-gradient(45deg, ${blue}, ${purple});
`
export const Container = styled(StyledContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Link = styled(HybridLink)`
  text-decoration: none;
  color: white;

  &:hover {
    opacity: .8;
  }
  &:active {
    color: ${orange};
    opacity: .9;
  }
`
export const Brand = styled.h1`
  margin: 0;
  font-size: 2em;
  font-weight: lighter;
`
export const List = styled.ul`
  display: flex;
  padding: 0;
  list-style-type: none;
`
export const Item = styled.li`
  font-size: 1em;
  font-weight: lighter;

  &:not(:last-child) {
    margin-right: 20px;
  }
`