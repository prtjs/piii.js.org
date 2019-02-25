import React from 'react'
import styled from 'styled-components'

import Container from '../styled/Container'

// Styles
const Section = styled.section`
  margin-bottom: 75px;
  padding: 50px 0;  
  text-align: center;
`
const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 50px;
  line-height: 150%;
`

// Others components
const CodePen = () => (
  <iframe
    height='600'
    style={{ width: '100%' }}
    scrolling='no'
    title='Chat sem Palavrões (Piii.js)'
    src='//codepen.io/theuves/embed/YBmPoM/?height=600&theme-id=12945&default-tab=js,result'
    frameBorder='no'
  >
    See the Pen
    <a href='https://codepen.io/theuves/pen/YBmPoM/'>
      Chat sem Palavrões (Piii.js)
    </a>
    by Matheus Alves
    (<a href='https://codepen.io/theuves'>@theuves</a>)
    on
    <a href='https://codepen.io'>
      CodePen
    </a>.
  </iframe>
)

const Examples = () => (
  <Section>
    <Container>
      <Title>
        Está criando um sitema para um público infantil ou
        apenas quer bloquear termos inconvenientes em seu site?
        Então o Piii.js pode lhe ajudar.
      </Title>

      <CodePen />
    </Container>
  </Section>
)

export default Examples