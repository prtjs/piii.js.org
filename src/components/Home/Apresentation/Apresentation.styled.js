import styled from 'styled-components'
import GlobalContainer from '../../styled/GlobalContainer'

export const Section = styled.section`
  padding-bottom: 75px;
  background-image: linear-gradient(-45deg, #8e44ad, #5e7083);
`

export const Container = styled(GlobalContainer)`
  display: flex;
  justify-content: space-between;
`

export const Content = styled.article`
  
`

export const Ver = styled.p`
  color: white;
`

export const Title = styled.h1`
  position: relative;
  line-height: 150%;
  font-family: 'Kaushan Script';
  font-size: 15em;
  background-image: linear-gradient(45deg, #bbb, white);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
`

export const Desc = styled.h2`
  /*font-family: ;*/
`

export const Btn = styled.a``

export const Imgs = styled.div`
  --gap: 10px;
  display: flex;
`

export const ImgsCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px; /* Devido ao 'box-shadow' do <ImgsColItem /> */

  &:first-child {
    margin-top: 20%;
    margin-right: var(--gap);

    /**
     * Referente ao primeiro <ImgsColItem /> do primeiro <ImgsCol />
     */
    & > *:first-child {
      position: relative;
      z-index: 1;
      box-shadow: 0 0 100px 10px rgba(0, 0, 0, .5) !important;
      animation: 2s fi-rotate alternate infinite linear;
      filter: none !important;

      /**
       * 'fi' de 'first-image'
       */
      @keyframes fi-rotate {
        from { transform: scale(1.15) rotate(9.5deg); }
        to { transform: scale(1.15) rotate(10.5deg); }
      }
    }
  }
  &:last-child {
    margin-left: var(--gap);

    /**
     * Referente ao primeiro <ImgsColItem /> do segundo <ImgsCol />
     */
    & > *:first-child {
      border-radius: 0 0 3px 3px;
    }
  }
`

export const ImgsColItem = styled.div`
  display: block;
  width: 200px;
  height: 225px;
  border-radius: 3px;
  filter: grayscale(.666);
  box-shadow: 25px 25px 0 0 rgba(0, 0, 0, .075);
  background-image: url(${props => props.img});
  background-size: cover;

  &:first-child {
    margin-bottom: var(--gap);
  }
  &:last-child {
    margin-top: var(--gap);
  }
`
