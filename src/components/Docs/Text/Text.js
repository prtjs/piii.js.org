import React, { Fragment } from 'react'

// Styles
import {
  Article,
  GitHubLink
} from './Text.styled'

/**
 * Obter o URL do arquivo de documentação no GitHub.
 *
 * @param {string} filename Nome do arquivo de documentação.
 * @returns {string} URL do arquivo de documentação no GitHub.
 */
function getGitHubDocUrl(filename) {
  const GH_BASE = 'https://github.com/piiijs/piii.js.org/blob/master/src/docs/'

  return GH_BASE + filename
}

export default ({ html, filename }) => (
  <Fragment>
    <Article dangerouslySetInnerHTML={{ __html: html }} />

    <GitHubLink href={getGitHubDocUrl(filename)}>
      Viu algum erro? Ajude-nos corrigindo no GitHub.
    </GitHubLink>
  </Fragment>
)