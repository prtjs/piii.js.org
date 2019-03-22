import styled from 'styled-components'
import StyledContainer from '../../styled/StyledContainer'

// Design
import { xlMarginY, smMarginY } from '../../design/margins'
import { darkOrange, purple } from '../../design/colors'

// Utils
import handleColor from 'handle-hex-colors'

const lighttOrange = handleColor(darkOrange, (x) => x + 10 * 17)
const lighttPurple = handleColor(purple, (x) => x + 10 * 17)

export const Section = styled.section`
  padding: ${xlMarginY}px 0;
`
export const Container = styled(StyledContainer)`
  display: flex;
`
export const Item = styled.article`
  padding: 0 ${smMarginY}px;
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
  background-color: ${props => props.color === 'orange' ? lighttOrange : lighttPurple};
  color: ${props => props.color === 'orange' ? darkOrange : purple};
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