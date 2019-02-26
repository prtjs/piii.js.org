import React from 'react'
import styled from 'styled-components'

const StyledText = styled.article`
  line-height: 180%;
  font-size: 16px;
  font-family: Helvetica, Arial, sans-serif;

  &,
  * {
    box-sizing: border-box;
  }

  p {
    margin-top: 0;
    margin-bottom: .25em;
  }

  ul p,
  ol p {
    margin: 0;
  }
  ul li,
  ol li {
    margin-bottom: .75em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-bottom: .25em;
    margin-top: .25em;
    margin-bottom: .75em;
    border-bottom: solid 1px #f5f5f5;
  }

  h1 { font-size: calc(1em + .25em * 6); }
  h2 { font-size: calc(1em + .25em * 4); }
  h3 { font-size: calc(1em + .25em * 3); }
  h4 { font-size: calc(1em + .25em * 2); }
  h5 { font-size: calc(1em + .25em); }
  h6 { font-size: 1em; }

  pre,
  code {
    background-color: #eee;
  }
  code {
    padding: .05em .15em;
  }
  pre code {
    padding: unset;
    background-color: unset;
  }
  pre {
    padding: 1em 1.25em;
    overflow-x: auto;
  }

  blockquote {
    margin: 0;
    padding-left: 1em;
    border-left: solid .25em gray;
    color: gray;
  }
`

export default ({ html }) => (
  <StyledText dangerouslySetInnerHTML={{ __html: html }} />
)