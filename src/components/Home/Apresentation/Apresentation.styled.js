import styled from 'styled-components'
import StyledContainer from '../../styled/StyledContainer'

// Design
import { smMarginY, mdMarginY, lgMarginY } from '../../design/margins'
import { purple, blue, orange, darkOrange } from '../../design/colors'
import { smWidth, lgWidth, xlWidth } from '../../design/devices'

// Utils
import handleColor from 'handle-hex-colors'

export const Section = styled.section`
  position: relative;
  padding-bottom: ${lgMarginY}px;
  background-color: ${purple};
  background-image: linear-gradient(45deg, ${blue}, ${purple});
`
export const Container = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
`
export const Content = styled.article`
  font-size: 10px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: ${smWidth}px) {
    font-size: 12px;
  }
  @media (min-width: ${lgWidth}px) {
    margin: initial;
    text-align: initial;
  }
  @media (min-width: ${xlWidth - 170}px) {
    font-size: 14px;
  }
  @media (min-width: ${xlWidth - 50}px) {
    font-size: 16px;
  }
`
export const Title = styled.a`
  display: inline-block;
  margin-top: ${mdMarginY}px;
  margin-bottom: ${smMarginY / 2}px;
  font-size: 2em;
  font-weight: lighter;
  text-decoration: none;
  color: rgba(255, 255, 255, .5);

  @media (min-width: ${xlWidth - 170}px) {
    margin-bottom: 0;
  }
`
export const Desc = styled.h2`
  margin-bottom: ${smMarginY}px;
  font-family: 'Luckiest Guy';
  font-size: 3em;
  font-weight: lighter;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, .25);
  text-decoration: line-through;
  text-decoration-color: rgba(142, 68, 173, .5);
  white-space: nowrap;
  letter-spacing: 5px;
  line-height: 115%;
  color: white;

  @media (min-width: ${smWidth - 100}px) {
    font-size: 5em;
  }
  @media (min-width: ${smWidth}px) {
    font-size: 6em;
  }
`
export const Btn = styled.a`
  display: inline-block;
  padding: 20px 40px;
  border-radius: 5px;
  font-size: 1.5em;
  transition: all .15s linear;
  box-shadow: 0 6px 0 0 ${darkOrange};
  text-decoration: none;
  background-color: ${orange};
  color: white;

  &:hover,
  &:focus {
    background-color: ${handleColor(orange, (x) => x + 5)};
    color: #eee;
  }
  &:active {
    transform: translateY(2px);
    box-shadow: 0 4px 0 0 ${orange};
    background-color: ${handleColor(orange, (x) => x + 10)};
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
  display: none;
  
  @media (min-width: ${lgWidth}px) {
    display: flex;
  }
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
  width: 160px;
  height: 185px;
  border-radius: 3px;
  filter: grayscale(.666);
  box-shadow: 25px 25px 0 0 rgba(0, 0, 0, .075);
  background-color: rgba(0, 0, 0, .5);
  background-image: url(${props => props.img});
  background-size: cover;

  &:first-child {
    margin-bottom: var(--gap);
  }
  &:last-child {
    margin-top: var(--gap);
  }

  @media (min-width: ${xlWidth}px) {
    width: 200px;
    height: 225px;
  }
`
