import styled from 'styled-components'
import GlobalContainer from '../../styled/GlobalContainer'

// Images
import srcImgArrowRight from '../../../images/arrow-right.svg'

export const Section = styled.section`
  position: relative;
  padding-bottom: 75px;
  background-image: linear-gradient(-45deg, #8e44ad, #5e7083);
`

export const Container = styled(GlobalContainer)`
  display: flex;
  justify-content: space-between;
`

export const Content = styled.article`

`

export const Title = styled.h1`
  margin-top: 50px;
  font-size: 2em;
  font-weight: lighter;
  color: rgba(255, 255, 255, .5);
`

export const Nw = styled.span`
  white-space: nowrap;
`

export const Desc = styled.h2`
  margin-bottom: 50px;
  font-family: 'Luckiest Guy';
  font-size: 6em;
  font-weight: lighter;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, .25);
  text-decoration: line-through;
  text-decoration-color: rgba(142, 68, 173, .5);
  letter-spacing: 5px;
  line-height: 115%;
  color: white;
`

export const Btn = styled.a`
  display: inline-block;
  padding: 20px 40px;
  border-radius: 5px;
  font-size: 1.5em;
  transition: all .15s linear;
  box-shadow: 0 6px 0 0 #d35400;
  text-decoration: none;
  background-color: #e67e22;
  color: white;

  &:hover {
    background-color: #e2802a;
    color: #eee;
  }
  &:active {
    transform: translateY(2px);
    box-shadow: 0 4px 0 0 #d35400;
    background-color: #e47c20;
    color: #ddd;
  }
`

export const BtnIcon = styled.span`
  display: inline-block;
  margin-left: 2px;
  animation: 1s arrow-animation alternate infinite ease-in;

  @keyframes arrow-animation {
    from { transform: translateX(4px); }
    to { transform: translateX(0); }
  }
`

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
