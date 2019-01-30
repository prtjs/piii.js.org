import React from 'react'
import styled from 'styled-components'

// Components
import Container from './Container'

// Images
import imgLogo from '../images/logo.svg'

// Styles
const StyledHome = styled.div`
  position: relative;
  padding: 50px 0 100px 0;
  background-color: #303952;
`
const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledSvg = styled.svg`
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
`
const StyledImg = styled.img`
  width: 500px;
  opacity: .6;
`
const StyledContent = styled.article`
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
const StyledBtn = styled.a`
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
  <StyledHome>
    <StyledContainer>
      <div>
        <StyledImg src={imgLogo} />
      </div>
      <StyledContent>
        <h1>Piii.js</h1>
        <h2>Um avançado filtro de palavrões.</h2>
        <StyledBtn href='#'>
          Documentação
        </StyledBtn>
      </StyledContent>
    </StyledContainer>

    {/* Efeito no final. */}
    <StyledSvg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
    >
      <polygon
        fill='white'
        points='0,100 100,0 100,100'
      />
    </StyledSvg>
  </StyledHome>
)

export default Home
