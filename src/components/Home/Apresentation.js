import React from 'react'
import styled from 'styled-components'

// Components
import Container from '../styled/Container'

import { Link as GatsbyLink } from 'gatsby'

// Images
import imgUrlLogo from '../../images/logo.svg'
import imgUrlEffect from '../../images/effect.svg'

// Styles
const Section = styled.section`
  position: relative;
  padding: 75px 0 125px 0;
  background-color: var(--blue);

  @media (max-width: 620px) {
    padding: 50px 0 100px 0;
  }
`
const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:after {
    content: '';
    width: 100%;
    height: 50px;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: url(${imgUrlEffect});
    background-size: 100% 100%;

  }
  @media (max-width: 620px) {
    &::after {
      height: 25px;
    }
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

  @media (max-width: 620px) {
    display: none;
  }
`
const Content = styled.article`
  flex: auto;
  text-align: center;
  font-size: 16px;
  font-family: 'Open Sans Condensed', Arial, sans-serif;
  color: white;

  @media (max-width: 620px) {
    font-size: 14px;
  }

  h1,
  h2 {
    margin: 0;
  }
  h1 {
    font-size: 5em;
  }
  h2 {
    margin-bottom: 25px;
    font-size: 2em;
    font-weight: lighter;
    font-style: italic;
    opacity: .8;
  }
`
const Btn = styled(GatsbyLink)`
  display: inline-block;
  padding: 15px 25px; 
  font-size: 1.15em;
  font-family: Helvetica, Verdana, Arial, sans-serif;
  border-radius: 5px;
  border: solid 1px var(--orange-dark-2);
  text-decoration: none;
  background-image: linear-gradient(to bottom, var(--orange-light), var(--orange-dark));
  color: white;

  &:hover {
    opacity: .9;
  }
  &:active {
    background-image: linear-gradient(to top, var(--orange-light), var(--orange-dark));
  }
`
const Version = styled.p`
  margin: 10px 0 0 0;

  color: gray;
`

export default () => (
  <Section>
    <StyledContainer>

      <WomanBg />

      <Content>
        <h1>Piii.js</h1>
        <h2>Um avançado filtro de palavrões.</h2>

        <Btn to='/docs/usando'>
          Documentação
        </Btn>

        <Version>
          Versão 2.0.4
        </Version>
      </Content>

    </StyledContainer>
  </Section>
)