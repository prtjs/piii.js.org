import React from 'react'

import {
  Footer,
  FooterPrimary,
  FooterSecondary,
  Container,
  LinksSection,
  LinksTitle,
  LinksItems,
  LinksItem
} from './Footer.styled.js'

const links = [
  {
    section: 'Documentação',
    data: [
      { title: 'Instalação', url: '#' },
      { title: 'Usando', url: '#' },
      { title: 'Opção aliases', url: '#' },
      { title: 'Opção filters', url: '#' },
      { title: 'Opção repeated', url: '#' },
      { title: 'Opção censor', url: '#' },
      { title: 'Opção cleaner', url: '#' }
    ]
  },
  {
    section: 'Repositórios',
    data: [
      { title: 'piii.js', url: '#' },
      { title: 'piii.js.org', url: '#' },
      { title: 'piii-filters', url: '#' }
    ]
  },
  {
    section: 'Links',
    data: [
      { title: 'NPM', url: '#' },
      { title: 'RunKit', url: '#' },
      { title: 'GitHub Issues', url: '#' },
      { title: 'GitHub Pull Requests', url: '#' }
    ]
  },
  {
    section: 'Autor',
    data: [
      { title: 'Homepage', url: '#' },
      { title: 'GitHub', url: '#' },
      { title: 'Twitter', url: '#' },
      { title: 'Fazer doação', url: '#' }
    ]
  }
]

export default () => (
  <Footer>
    <FooterPrimary>
      <Container>
        {links.map((link, linksIndex) => (
          <LinksSection key={linksIndex}>
            <LinksTitle>
              {link.section}
            </LinksTitle>
            <LinksItems>
              {link.data.map((site, dataIndex) => (
                <LinksItem key={dataIndex}>
                  <a href={site.url}>
                    {site.title}
                  </a>
                </LinksItem>
              ))}
            </LinksItems>
          </LinksSection>
        ))}
      </Container>
    </FooterPrimary>
    <FooterSecondary>
      <Container>
        <div>
          Feito com <i className="fas fa-heart" /> em Dourados-MS, Brasil.
        </div>
        <div>
          &copy; 2015-2019 Matheus Alves
        </div>
      </Container>
    </FooterSecondary>
  </Footer>
)