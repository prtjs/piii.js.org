import React from 'react';

import {
  Section
} from './ApresentationInfo.styled.js'

export default () => (
  <Section>
    <p>
      Esse projeto tem o código aberto e está disponível no GitHub.

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
    </p>
  </Section>
)