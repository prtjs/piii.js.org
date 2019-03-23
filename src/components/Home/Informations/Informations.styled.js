import styled from 'styled-components'
import StyledContainer from '../../styled/StyledContainer'

// Design
import { orange } from '../../design/colors'
import { smMarginY, mdMarginY, xlMarginY } from '../../design/margins'
import { smWidth, mdWidth, lgWidth, xlWidth } from '../../design/devices'

export const Section = styled.section`
  background-color: #fbfbfb;
`
export const Container = styled(StyledContainer)`
  padding-top: ${mdMarginY}px;
  padding-bottom: ${mdMarginY}px;

  @media (min-width: ${mdWidth}px) {
    display: flex;
  }
  @media (min-width: ${xlWidth}px) {
    padding-top: ${xlMarginY}px;
    padding-bottom: ${xlMarginY}px;
  }
`
export const Example = styled.div`
  width: 400px;
  display: none;

  iframe {
    box-shadow: 0 0 50px 12.5px rgba(0, 0, 0, .125);
  }

  @media (min-width: ${mdWidth}px) {
    display: block;
  }
  @media (min-width: ${lgWidth}px) {
    width: 450px;
  }
`
export const Content = styled.div`
  flex: 1;
  font-size: 1.15em;

  p:not(:last-child) {
    margin-bottom: 15px;
  }
`
export const Text = styled.article`
  padding: ${smMarginY}px;
  border-radius: 3px;
  text-align: left;
  line-height: 175%;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, .05);
  color: #333;
  background-color: white;

  @media (min-width: ${mdWidth}px) {
    margin-left: 25px;
  }
  @media (min-width: ${mdWidth}px) {
    margin-left: 75px;
  }
`
export const Title = styled.h1`
  position: relative;
  z-index: 1;
  display: inline-block;
  margin-bottom: 25px;
  font-family: 'Luckiest Guy';
  font-size: 1.5em;
  font-weight: lighter;
  letter-spacing: 2.5px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    z-index: -1;
    display: block;
    height: 10px;
    width: 100%;
    transform: skew(50deg);
    background-color: ${orange};
  }

  @media (min-width: ${smWidth}px) {
    margin-bottom: 35px;
    font-size: 2em;

    &::after {
      bottom: -2.5px;
    }
  }
  @media (min-width: ${xlWidth}px) {
    margin-bottom: 50px;
    font-size: 3em;

    &::after {
      bottom: unset;
    }
  }
`