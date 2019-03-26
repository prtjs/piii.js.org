import React from 'react'

// Components
import Layout from '../../Layout'
import Header from '../../Header/Header'
import Container from '../../styled/StyledContainer'
import Topics from '../Topics/Topics'
import Text from '../Text/Text'

import {
  Main,
  Aside,
  Article
} from './Docs.styled'

export default ({
  pageContext: {
    html,        // HTML gerado a partir do markdown.
    title,       // Título da página
    currentPath, // Caminho para o documento atual.
    filename,    // Nome do arquivo que será usado para linkar ao GitHub.
    links        // Links de todos os documentos.
  }
}) => (
  <Layout articleTitle={title}>
    <Header />
    <Container>
      <Main>
        <Article>
          <Text html={html} filename={filename} />
        </Article>
        <Aside>
          <Topics links={links} currentPath={currentPath} />
        </Aside>
      </Main>
    </Container>
  </Layout>
)