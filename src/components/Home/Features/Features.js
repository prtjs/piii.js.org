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
        aria-hidden='true'
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
          Não se preocupe com o modo como o usuário escreverá o palavrão. Seja
          em <a href='https://pt.wikipedia.org/wiki/Caixa_alta_e_caixa_baixa'>caixa-alta ou baixa</a>,
          o Piii.js vai ignorá-las e filtrá-lo do mesmo jeito.
        </Info>
        <Info
          icon='fill-drip'
          isEven={false}
          title='Ignora acentuações'
        >
          Não se preocupe com qualquer tipo
          de <a href='https://pt.wikipedia.org/wiki/Diacr%C3%ADtico'>acentuação</a> ou
          caracteres especiais que o usuário poderia usar para burlar o filtro,
          o Piii.js permite que você manipule-os antes.
        </Info>
        <Info
          icon='brush'
          isEven={true}
          title='Ignora 1337'
        >
          Não se preocupe com o
          alfabeto <span aria-label='leet'><a href='https://pt.wikipedia.org/wiki/Leet'>1337</a></span>,
          o Piii.js deixa você escrever e configurar um alfabeto personalizado,
          relacionando números ou outros símbolos a letras.
        </Info>
        <Info
          icon='copy'
          isEven={false}
          title='Ignora outras coisas'
        >
          Não se preocupe com letras repetidas. Crie filtros personalizados.
          Tenha a possibilidade de manipular os palavrões filtrados antes de
          censurá-los.
        </Info>
      </SubContainer>
    </StyledContainer>
  </Section>
)