import React from 'react'
import styled from 'styled-components'

// Components
import Layout from '../Layout'
import Container from '../styled/StyledContainer'
import Topics from './Topics'
import Text from './Text'

const Main = styled.main`
  display: flex;
  padding: 50px 0; 
  margin: 0 auto;

  @media (max-width: 620px) {
    padding: 0;
    flex-direction: column-reverse;
  }
`
const Aside = styled.aside`
  width: 200px;

  @media (max-width: 620px) {
    padding: 20px 0;
    display: block;
    width: unset;
  }
`
const Article = styled.article`
  flex: 1;
  margin-right: 20px;

  @media (max-width: 620px) {
    margin-right: 0;
  }
`

export default ({
  pageContext: {
    html,        // HTML gerado a partir do markdown.
    currentPath,        // Caminho para o documento atual.
    filename,    // Nome do arquivo que será usado para linkar ao GitHub.
    links        // Links de todos os documentos.
  }
}) => (
  <Layout>
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