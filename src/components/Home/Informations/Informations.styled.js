import styled from 'styled-components'
import GlobalContainer from '../../styled/GlobalContainer'

export const Section = styled.section`
  background-color: #fbfbfb;
`
export const Container = styled(GlobalContainer)`
  padding: 100px 0;
  display: flex;
`
export const Example = styled.div`
  width: 450px;

  iframe {
    box-shadow: 0 0 50px 12.5px rgba(0, 0, 0, .125);
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
  padding: 35px;
  margin-left: 75px;
  border-radius: 3px;
  text-align: left;
  line-height: 175%;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, .05);
  color: #333;
  background-color: white;
`
export const Title = styled.h1`
  position: relative;
  z-index: 1;
  display: inline-block;
  margin-bottom: 50px;
  font-family: 'Luckiest Guy';
  font-size: 3em;
  font-weight: lighter;
  letter-spacing: 2.5px;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    display: block;
    height: 10px;
    width: 100%;
    transform: skew(50deg);
    background-color: #e67e22;
  }
`