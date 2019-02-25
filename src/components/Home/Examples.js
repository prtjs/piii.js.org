import React from 'react'
import styled from 'styled-components'

import Container from '../styled/Container'

import CodePen from '../CodePen'

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

const Examples = () => (
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

export default Examples