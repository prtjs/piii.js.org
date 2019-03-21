import styled from 'styled-components'
import GlobalContainer from '../../styled/GlobalContainer'

export const Section = styled.section`
  padding: 100px 0;
`
export const Container = styled(GlobalContainer)`
  display: flex;
`
export const Item = styled.article`
  padding: 0 25px;
  text-align: center;

  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`
export const ItemIcon = styled.i`
  display: inline-flex;
  margin-bottom: 15px;
  padding: 10px;
  width: 2em;
  height: 2em;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 2em;
  background-color: ${props => props.color === 'orange' ? '#e67e2233': '#8e44ad33'};
  color: ${props => props.color === 'orange' ? '#e67e22': '#8e44ad'};
`
export const ItemTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 1.2em;
`
export const ItemContent = styled.p`
  font-size: 1.15em;
  line-height: 175%;
  text-align: left;
  color: #333;
`