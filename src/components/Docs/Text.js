import React, { Fragment } from 'react'
import styled from 'styled-components'

const StyledText = styled.article`
  padding: 0 30px 30px 30px;
  margin-bottom: 25px;
  border-radius: 3px;
  border: solid 1px #eee;
  line-height: 180%;
  font-size: 16px;
  font-family: Helvetica, Arial, sans-serif;
  box-shadow: 1px 1px 1px 0 #ddd;

  &,
  * {
    box-sizing: border-box;
  }

  p {
    margin-top: 0;
    margin-bottom: .25em;
  }

  a {
    color: var(--blue);

    &:hover {
      text-decoration: none;
    }
    &:active {
      color: darkred;
    }
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
    padding-bottom: .35em;
    margin-top: 1em;
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
    border-left: solid .25em var(--orange-light);
    color: gray;
  }

  @media (max-width: 620px) {
    font-size: 14px;
  }
`

const GitHubLink = styled.a`
  display: block;
  margin-bottom: 50px;
  font-size: 14px;
  font-style: italic;
  color: gray;
`

function getGitHubDocUrl(filename) {
  const GH_BASE = 'https://github.com/piiijs/piii.js.org/blob/master/src/docs/'

  return GH_BASE + filename
}

export default ({ html, filename }) => (
  <Fragment>
    <StyledText dangerouslySetInnerHTML={{ __html: html }} />

    <GitHubLink href={getGitHubDocUrl(filename)}>
      Viu algum erro? Ajude-nos corrigindo no GitHub.
    </GitHubLink>
  </Fragment>
)