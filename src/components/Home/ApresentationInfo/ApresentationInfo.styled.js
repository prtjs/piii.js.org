import styled from 'styled-components'

// Design
import { smMarginY } from '../../design/margins'
import { mdWidth } from '../../design/devices'
import { lightBlue } from '../../design/colors'

export const Section = styled.section`
  text-align: center;
  padding: ${smMarginY}px 0;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, .25);
  background-color: #ddd;

  a {
    color: ${lightBlue};
  }
`