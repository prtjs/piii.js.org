import styled from 'styled-components'
import GlobalContainer from '../../styled/GlobalContainer'

export const Footer = styled.footer`
  background-color: #333;
  color: white;
`
export const FooterPrimary = styled.div`
  padding: 50px;
`
export const FooterSecondary = styled.div`
  padding: 25px;
  font-size: .85em;
  color: #999;
  background-color: #222;

  // Referente ao Container do último item do footer
  > div {
    justify-content: space-between;
  }
`
export const Container = styled(GlobalContainer)`
  display: flex;
`
export const LinksSection = styled.div`
  flex: 1;
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