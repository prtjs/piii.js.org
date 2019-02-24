import React from 'react'
import styled from 'styled-components'

// Components
import Container from '../styled/Container'

// Images
import imgUrlLogo from '../../images/logo.svg'
import imgUrlEffect from '../../images/effect.svg'

// Styles
const Section = styled.section`
  position: relative;
  padding: 50px 0 100px 0;
  background-color: #303952;
`
const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:after {
    content: '';
    width: 100%;
    height: 75px;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: url(${imgUrlEffect})
  }
`
const WomanBg = styled.div`
  --w: 500px;
  --h: calc(var(--w) * 264.4 / 399.991);
  width: var(--w);
  height: var(--h);
  opacity: .6;
  background-size: 100% 100%;
  background-image: url(${imgUrlLogo});
`
const Content = styled.article`
  flex: auto;
  text-align: center;
  font-family: 'Open Sans Condensed', Arial, sans-serif;
  color: white;
  font-size: 20px;

  h1,
  h2 {
    margin: 0;
  }
  h1 {
    font-size: 4em;
  }
  h2 {
    margin-bottom: 25px;
    font-size: 1.5em;
    font-weight: lighter;
    font-style: italic;
    opacity: .8;
  }
`
const Btn = styled.a`
  display: inline-block;
  padding: 15px 25px; 
  font-family: Helvetica, Verdana, Arial, sans-serif;
  border-radius: 5px;
  border: solid 1px #d5674d;
  text-decoration: none;
  background-color: #e15f41;
  background-image: linear-gradient(to bottom, #e15f41, #b23e23);
  color: white;

  &:hover {
    opacity: .9;
  }
  &:active {
    background-image: linear-gradient(to top, #e15f41, #b23e23);
  }
`

const Home = () => (
  <Section>
    <StyledContainer>

      <WomanBg />

      <Content>
        <h1>Piii.js</h1>
        <h2>Um avançado filtro de palavrões.</h2>
        <Btn href='#'>
          Documentação
        </Btn>
      </Content>

    </StyledContainer>
  </Section>
)

export default Home
