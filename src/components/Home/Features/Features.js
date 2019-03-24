import React from 'react'
import StyledContainer from '../../styled/StyledContainer'

  import {
    Section,
    SubContainer,
    Item,
    ItemIcon,
    ItemTitle,
    ItemContent
  } from './Features.styled.js'

  const Info = ({
    icon,
    isEven,
    title,
    children
  }) => (
    <Item>
      <ItemIcon
        className={'fas fa-' + icon}
        aria-hidden="true"
        color={isEven ? 'orange' : 'purple'}
      />
      <ItemTitle>{title}</ItemTitle>
      <ItemContent>{children}</ItemContent>
    </Item>
  )

export default () => (
  <Section>
    <StyledContainer>
      <SubContainer>
        <Info
          icon='scroll'
          isEven={true}
          title='Ignora caixas'
        >
          Não se preocupe como o modo com o usuário escreverá o palavrão. Seja
          em caixa-alta ou baixa, o Piii.js vai ignorá-las e filtrá-las do
          mesmo jeito.
        </Info>
        <Info
          icon='fill-drip'
          isEven={false}
          title='Ignora acentuações'
        >
          Não se preocupe com qualquer tipo de acentuação ou caracteres
          especiais que o usuário poderia usar para burlar o filtro, o Piii.js
          permite que você manipule-os antes.
        </Info>
        <Info
          icon='brush'
          isEven={true}
          title='Ignora 1337'
        >
          Não se preocupe com o alfabeto <span aria-label="leet">1337</span>,
          o Piii.js deixa você escrever e configurar um alfabeto personalizado,
          relacionando números ou outros símbolos a letras.
        </Info>
        <Info
          icon='copy'
          isEven={false}
          title='Ignora outras coisas'
        >
          Não se preocupe com letras repetidas. Crie filtros personalizados.
          Tenha a posssibilidade de manipular os palavrões filtrados antes de
          censurá-los.
        </Info>
      </SubContainer>
    </StyledContainer>
  </Section>
)