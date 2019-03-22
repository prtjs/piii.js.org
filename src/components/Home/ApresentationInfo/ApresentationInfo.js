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
        Esse projeto tem o <b>código aberto</b> e está disponível no GitHub.
      </p>

      <iframe
        src="https://ghbtns.com/github-btn.html?user=piiijs&repo=piii.js&type=star&count=true"
        frameBorder="0"
        scrolling="0"
        width="80px"
        height="20px"
      />
      <iframe
        src="https://ghbtns.com/github-btn.html?user=piiijs&repo=piii.js&type=fork&count=true"
        frameBorder="0"
        scrolling="0"
        width="80px"
        height="20px"
      />
    </Container>
  </Section>
)