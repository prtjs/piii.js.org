import styled from 'styled-components'
import StyledContainer from '../../styled/StyledContainer'

// Design
import { smWidth } from '../../design/devices'
import { mdMarginY, smMarginY } from '../../design/margins'

export const Footer = styled.footer`
  background-color: #333;
  color: white;
`
export const FooterPrimary = styled.div`
  padding: ${smMarginY}px 0;

  @media (min-width: ${smWidth}px) {
    padding: ${mdMarginY}px 0;
  }
`
export const FooterSecondary = styled.div`
  padding: ${smMarginY}px 0;
  font-size: .85em;
  color: #999;
  background-color: #222;

  // Referente ao <Container /> do último item do footer
  > div {
    > div:not(:last-child) {
      margin-bottom: 10px;
    }

    @media (min-width: ${smWidth}px) {
      justify-content: space-between;

      > div {
        margin-bottom: 0 !important;
      }
    }
  }
`
export const Container = styled(StyledContainer)`
  @media (min-width: ${smWidth}px) {
    display: flex;
  }
`
export const LinksSection = styled.div`
  margin-bottom: 30px;

  @media (min-width: ${smWidth}px) {
    margin-bottom: unset;
    flex: 1;
  }
`
export const LinksTitle = styled.h3`
  margin-bottom: 15px;
  font-weight: lighter;
  font-size: 1em;
  color: gray;
`
export const LinksItems = styled.ul`
  padding: 0;
  list-style-type: none;
`
export const LinksItem = styled.li`
  margin: 12.5px 0;

  a {
    font-weight: lighter;
    text-decoration: none;
    color: white;
  }
`