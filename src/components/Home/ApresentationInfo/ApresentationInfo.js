import React from 'react';

import {
  Section,
  Flex
} from './ApresentationInfo.styled.js'

export default () => (
  <Section>
    <p>
      Esse projeto tem o <b>código aberto</b> e está disponível no GitHub.
    </p>

    <iframe
      src="https://ghbtns.com/github-btn.html?user=piiijs&repo=piii.js&type=star&count=true"
      frameborder="0"
      scrolling="0"
      width="80px"
      height="20px"
    />
    <iframe
      src="https://ghbtns.com/github-btn.html?user=piiijs&repo=piii.js&type=fork&count=true"
      frameborder="0"
      scrolling="0"
      width="80px"
      height="20px"
    />
  </Section>
)