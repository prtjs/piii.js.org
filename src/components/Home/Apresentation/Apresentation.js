import React from 'react'

// Images
import srcImg1 from '../../../images/apresentation/1.jpg'
import srcImg2 from '../../../images/apresentation/2.jpg'
import srcImg3 from '../../../images/apresentation/3.jpg'
import srcImg4 from '../../../images/apresentation/4.jpg'

import {
  Section,
  Container,
  Content,
  Ver,
  Title,
  Desc,
  Btn,
  Imgs,
  ImgsCol,
  ImgsColItem
} from './Apresentation.styled.js'

export default () => (
  <Section>
    <Container>
      <Content>
        <Ver>Versão 2.0.4</Ver>
        <Title>Piii.js</Title>
        <Desc>Um avançado filtro de palavrões.</Desc>
        <Btn>Leia documentação</Btn>
      </Content>

      <Imgs>
        <ImgsCol>
          <ImgsColItem img={srcImg1} />
          <ImgsColItem img={srcImg2} />
        </ImgsCol>
        <ImgsCol>
          <ImgsColItem img={srcImg3} />
          <ImgsColItem img={srcImg4} />
        </ImgsCol>
      </Imgs>
    </Container>
  </Section>
)