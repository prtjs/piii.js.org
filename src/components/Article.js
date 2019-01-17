import React from 'react'
import styled from 'styled-components'

const StyledArticle = styled.article`
  font-family: Arial, Helvetica, sans-serif;
  line-height: 200%;
  
  * {
    margin: 0;
    padding: 0;
  }

  p,
  pre,
  table,
  img,
  ul,
  ol,
  blockquote,
  h1,
  h2,
  h3,
  h4,
  h5,
  h5 {
    margin-bottom: 20px !important;
  }

  ul ul,
  ul p {
    margin: 5px 0 !important;
  }

  h1 { font-size: 2em; }
  h2 { font-size: 1.75em; }
  h3 { font-size: 1.5em; }
  h4 { font-size: 1.25em; }
  h5 { font-size: 1em; }
  h6 { font-size: .75em; }

  code {
    padding: .15em .6em !important;
    border-radius: 3px;
    background-color: #eee;
    color: darkred;
  }

  pre {
    line-height: 150%;
    padding: 20px !important;
    border-radius: 3px;
    overflow-x: auto;
    background-color: #eee;
  }
  pre code {
    all: unset;
  }

  a {
    color: blue;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  blockquote {
    padding-left: 1em !important;
    border-left: solid .25em #a2b6d9;
    color: gray;
  }

  ul,
  ol {
    padding-left: 2em !important
  }
`

const Article = ({ title, html }) => (
  <StyledArticle>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </StyledArticle>
)

export default Article