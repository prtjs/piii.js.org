import React from 'react'
import styled from 'styled-components'

// Local components
import Container from '../styled/Container'

const Section = styled.section`
  padding: 50px 0;
  text-align: center;
`
const Title = styled.h1`
  font-size: 2.5em;
  line-height: 150%;
`

const Examples = () => (
  <Section>
    <Container>
      <Title>
        Está criando um sitema para um público infantil ou
        apenas quer bloquer termos inconvenientes em seu site?
        Então o Piii.js pode lher ajudar.
      </Title>
    </Container>
  </Section>
)

export default Examples