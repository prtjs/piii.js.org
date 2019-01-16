import React from 'react'

const Docs = ({ pageContext: { html, title }}) => (
  <div>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
)

export default Docs