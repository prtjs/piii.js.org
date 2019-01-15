import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  padding: 30px 0;
  text-align: right;
  background-color: black;
  color: white;

  p {
    margin: 0;
    line-height: 150%;
  }
`

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 750px;
`

const Footer = () => (
  <StyledFooter>
    <StyledContainer>
      <p>
        Desenhado e criado por Matheus Alves.<br />
       Piii.js é um projeto licenciado sob a licença MIT.
     </p>
   </StyledContainer>
  </StyledFooter>
)

export default Footer