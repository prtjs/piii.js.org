import React from 'react';
import Container from '../../styled/StyledContainer'

import {
  Section,
  Flex
} from './ApresentationInfo.styled.js'

export default () => (
  <Section>
    <Container>
      <p>
        Esse projeto tem o <b>código aberto</b> e está disponível no <a href="https://github.com/piii/piii.js">GitHub</a>.
      </p>
    </Container>
  </Section>
)