import React from 'react'
import styled from 'styled-components'

// Components
import Layout from '../Layout'
import Container from '../styled/Container'
import Topics from './Topics'
import Text from './Text'

const Main = styled.main`
  display: flex;
  padding: 50px 0; 
  margin: 0 auto;
`
const Aside = styled.aside`
  width: 200px;
`
const Article = styled.article`
  flex: 1;
  margin-right: 25px;
`

export default ({
  pageContext: {
    html,        // HTML gerado a partir do markdown.
    links        // Links de todos os documentos.
  }
}) => (
  <Layout>
    <Container>
      <Main>

        <Article>
          <Text html={html} />
        </Article>

        <Aside>
          <Topics links={links} />
        </Aside>

      </Main>
    </Container>
  </Layout>
)