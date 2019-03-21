import React from 'react'

import {
  Section,
  Container,
  Item,
  ItemIcon,
  ItemTitle,
  ItemContent
} from './Features.styled.js'

export default () => (
  <Section>
    <Container>
      <Item>
        <ItemIcon
          className="fas fa-scroll"
          aria-hidden="true"
          color="purple"
        />
        <ItemTitle>Ignora caixas</ItemTitle>
        <ItemContent>
          Não se preocupe como o modo com o usuário escreverá o palavrão. Seja
          em caixa-alta ou baixa, o Piii.js vai ignorá-las e filtrá-las do
          mesmo jeito.
        </ItemContent>
      </Item>
      <Item>
        <ItemIcon
          className="fas fa-fill-drip"
          aria-hidden="true"
          color="orange"
        />
        <ItemTitle>Ignora acentuações</ItemTitle>
        <ItemContent>
          Não se preocupe com qualquer tipo de acentuação ou caracteres
          especiais que o usuário poderia usar para burlar o filtro, o Piii.js
          permite que você manipule-os antes.
        </ItemContent>
      </Item>
      <Item>
        <ItemIcon
          className="fas fa-brush"
          aria-hidden="true"
          color="purple"
        />
        <ItemTitle>Ignora <span aria-label="leet">1337</span></ItemTitle>
        <ItemContent>
          Não se preocupe com o alfabeto <span aria-label="leet">1337</span>,
          o Piii.js deixa você escrever e configurar um alfabeto personalizado,
          relacionando números ou outros símbolos a letras.
        </ItemContent>
      </Item>
      <Item>
        <ItemIcon
          className="fas fa-copy"
          aria-hidden="true"
          color="orange"
        />
        <ItemTitle>Ignora outras coisas</ItemTitle>
        <ItemContent>
          Não se preocupe com letras repetidas. Crie filtros personalizados.
          Tenha a posssibilidade de manipular os palavrões filtrados antes de
          censurá-los.
        </ItemContent>
      </Item>
    </Container>
  </Section>
)