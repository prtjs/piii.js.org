import styled from 'styled-components'
import StyledContainer from '../styled/StyledContainer'
import { HybridLink } from './Header.utils'

export const StyledHeader = styled.header`
  padding: 2.5px 0;
  color: white;
  background-color: black;
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
    opacity: .9;
  }
`
export const Brand = styled.h1`
  margin: 0;
  font-size: 2.25em;
`
export const List = styled.ul`
  display: flex;
  padding: 0;
  list-style-type: none;
`
export const Item = styled.li`
  font-size: 1.15em;

  &:not(:last-child) {
    margin-right: 20px;
  }
`