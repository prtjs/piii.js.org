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
  Title,
  Nw,
  Desc,
  Btn,
  BtnIcon,
  Imgs,
  ImgsCol,
  ImgsColItem
} from './Apresentation.styled.js'

export default () => (
  <Section>
    <Container>
      <Content>
        <Title href="#" role="banner">Piii.js</Title>
        <Desc aria-label="Um avançado filtro de palavrões.">
          <Nw aria-hidden="true">Um avançado</Nw>{` `}
          <Nw aria-hidden="true">filtro de</Nw>{` `}
          <Nw aria-hidden="true">palavrões.</Nw>
        </Desc>
        <Btn  href="#">
          Ler a documentação
          {` `}
          <BtnIcon aria-hidden="true">
            <i className="fas fa-arrow-right" />
          </BtnIcon>
        </Btn>
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