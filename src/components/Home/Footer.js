import React from 'react'
import styled from 'styled-components'

// Images
import imgSocialGithub from '../../images/social-icons/github.svg'
import imgSocialNpm from '../../images/social-icons/npm.svg'
import imgSocialTwitter from '../../images/social-icons/twitter.svg'
import imgSocialPaypal from '../../images/social-icons/paypal.svg'

// Styles
const Section = styled.footer`
`
const SocialLinks = styled.div`
  padding: 100px 0;
  background-color: #eee;

  @media (max-width: 620px) {
    padding: 35px 0;
  }

  ul {
    text-align: center;
    list-style-type: none;
    padding: 0;

    li {
      display: inline-block;
      padding: 0 10px;

      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    }
  }
`
const SocialImg = styled.img `
  width: 3em;
  height: 3em;
  border-radius: 50%;
  box-shadow: 1px 1px 3px 0 #ccc;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
  }
  @media (max-width: 620px) {
    width: 2.5em;
    height: 2.5em;
  }
`
const About = styled.div`
  padding: 40px 0;
  font-family: Helvetica, Verdana, Arial, sans-serif;
  text-align: center;
  font-size: 16px;
  line-height: 160%;
  color: white;
  background-color: black;

  p {
    margin: 0;
  }
  @media (max-width: 620px) {
    padding: 30px;
    font-size: 14px;
  }
`

const Footer = () => (
  <Section>
    <SocialLinks>
      <ul>
        <li>
          <a href='https://github.com/theuves/piiijs/piii.js'>
            <SocialImg src={imgSocialGithub} />
          </a>
        </li>
        <li>
          <a href='https://npmjs.com/package/piii'>
            <SocialImg src={imgSocialNpm} />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/theuves'>
            <SocialImg src={imgSocialTwitter} />
          </a>
        </li>
        <li>
          <a href='/'>
            <SocialImg src={imgSocialPaypal} />
          </a>
        </li>
      </ul>
    </SocialLinks>
    <About>
      <p>Copyright &copy; 2016-2019 by Matheus Alves (a.k.a. @theuves).</p>
      <p>Projeto licenciado sob a licença MIT.</p>
    </About>
  </Section>
)

export default Footer