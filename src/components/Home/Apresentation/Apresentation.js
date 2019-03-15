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
        <Title>Piii.js</Title>
        <Desc>
          <Nw>Um avançado</Nw>{` `}
          <Nw>filtro de</Nw>{` `}
          <Nw>palavrões.</Nw>
        </Desc>
        <Btn  href="#">
          Ler a documentação
          {` `}
          <BtnIcon>
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