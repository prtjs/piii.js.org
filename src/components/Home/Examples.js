import React from 'react'
import styled from 'styled-components'

import Container from '../styled/Container'

import CodePen from '../CodePen'

// Styles
const Section = styled.section`
  padding: 90px 0;  
  text-align: center;

  @media (max-width: 620px) {
    padding: 40px 0;
  }
`
const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 50px;
  line-height: 150%;

  @media (max-width: 620px) {
    font-size: 1.5em;
  }
`

export default () => (
  <Section>
    <Container>
      <Title>
        Está criando um sitema para um público infantil ou
        apenas quer bloquear termos inconvenientes em seu site?
        Então o Piii.js pode lhe ajudar.
      </Title>

      <CodePen
        penId='YBmPoM'
        penUser='theuves'
        penHeight={600}
        penTitle='Chat sem Palavrões (Piii.js)'
      />
    </Container>
  </Section>
)