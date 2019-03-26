import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  padding: 50px 0; 
  margin: 0 auto;

  @media (max-width: 620px) {
    padding: 0;
    flex-direction: column-reverse;
  }
`
export const Aside = styled.aside`
  width: 200px;

  @media (max-width: 620px) {
    padding: 20px 0;
    display: block;
    width: unset;
  }
`
export const Article = styled.article`
  flex: 1;
  margin-right: 20px;

  @media (max-width: 620px) {
    margin-right: 0;
  }
`