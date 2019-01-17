import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Article from './Article'
import Layout from './Layout'
import Navbar from './Navbar'
import Footer from './Footer'
import logo from '../images/logo.png'

const StyledHeader = styled.header`
  padding: 15px;
  text-align: center;
  background-image: linear-gradient(to right, #a2b6d9, #e9ecc4);

  h1 {
    margin: 0;
  }
`

const StyledContainer = styled.div`
  display: grid;
  width: 700px;
  margin: 0 auto 60px auto;
  grid-template-columns: 200px 500px;
  grid-column-gap: 20px;
`

const StyledListGroup = styled.ul`
  padding: 10px;
  border-radius: 3px;
  list-style-type: none;
  background-image: linear-gradient(to top, #a2b6d9, #e9ecc4);
`

const StyledListIem = styled.li`
  padding: 5px 0;

  a {
    display: block;
    padding: 5px 10px;
    border-radius: 3px;
    text-decoration: none;
    background-color: #ffffffaa;
    color: #333;

    &:hover {
      background-color: #ffffffee;
    }
    &:active {
      background-color: #ffffff99;
    }
  }
`

const Docs = ({
  pageContext: {
    title,
    html,
    links
  }
}) => (
  <Layout>
    <StyledHeader>
      <img src={logo} width='30' />
      <h1>Piii.js</h1>
    </StyledHeader>
    <Navbar
      fontSize={1.15}
      marginBottom={60}
      paddingY={15}
    />
    <StyledContainer>
      <aside>
        <StyledListGroup>
          {links.map((link, index) => (
            <StyledListIem key={index}>
              <Link to={link.path}>
                {link.title}
              </Link>
            </StyledListIem>
          ))}
        </StyledListGroup>
      </aside>
      <Article
        title={title}
        html={html}
      />
    </StyledContainer>
    <Footer />
  </Layout>
)

export default Docs