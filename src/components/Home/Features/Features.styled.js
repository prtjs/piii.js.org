import styled from 'styled-components'

// Design
import { mdWidth, xlWidth, lgWidth } from '../../design/devices'
import { xlMarginY, mdMarginY, smMarginY } from '../../design/margins'
import { darkOrange, purple } from '../../design/colors'

// Utils
import handleColor from 'handle-hex-colors'

const lighttOrange = handleColor(darkOrange, (x) => x + 10 * 17)
const lighttPurple = handleColor(purple, (x) => x + 10 * 17)

export const Section = styled.section`
  padding: ${smMarginY}px 0;

  @media (min-width: ${mdWidth}px) {
    padding: ${mdMarginY}px 0;
  }
  @media (min-width: ${xlWidth}px) {
    padding: ${xlMarginY}px 0;
  }
`
export const SubContainer = styled.div`
  display: block;
  overflow-x: scroll;
  white-space: nowrap;

  * {
    white-space: normal;
  }
  @media (min-width: ${lgWidth}px) {
    display: flex;
    overflow-x: hidden;
    white-space: normal;
  }
`
export const Item = styled.article`
  display: inline-block;
  padding: 0 10px;
  vertical-align: top;
  width: 250px;
  text-align: center;

  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }

  @media (min-width: ${lgWidth}px) {
    flex: 1;
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