import React from 'react'
import HybridLink from '../../HybridLink'

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
      { isLocal: true, title: 'Instalação', url: '/docs/instalacao' },
      { isLocal: true, title: 'Usando', url: '/docs/usando' },
      { isLocal: true, title: 'Opção aliases', url: '/docs/options/aliases' },
      { isLocal: true, title: 'Opção filters', url: '/docs/options/filters' },
      { isLocal: true, title: 'Opção repeated', url: '/docs/options/repeated' },
      { isLocal: true, title: 'Opção censor', url: '/docs/options/censor' },
      { isLocal: true, title: 'Opção cleaner', url: '/docs/options/cleaner' }
    ]
  },
  {
    section: 'Repositórios',
    data: [
      { title: 'piii.js', url: 'https://github.com/piiijs/piii.js' },
      { title: 'piii.js.org', url: 'https://github.com/piiijs/piii.js.org' },
      { title: 'piii-filters', url: 'https://github.com/piiijs/piii-filters' }
    ]
  },
  {
    section: 'Links',
    data: [
      { title: 'NPM', url: 'https://npmjs.com/packages/piii' },
      { title: 'RunKit', url: 'https://npm.runkit.com/piii' },
      { title: 'GitHub Issues', url: 'https://github.com/piiijs/piii.js/issues' },
      { title: 'GitHub Pull Requests', url: 'https://github.com/piiijs/piii.js/pulls' }
    ]
  },
  {
    section: 'Autor',
    data: [
      { title: 'Homepage', url: 'https://theuves.github.io/' },
      { title: 'GitHub', url: 'https://github.com/theuves' },
      { title: 'Twitter', url: 'https://twitter.com/theuves' },
      { title: 'Fazer doação', url: 'https://www.paypal.com/donate/?token=UqEz7FgqbnlFNdv7g251EBvrqyeCjzsn7cPbe5Anwt2lLpOv9vHxfzEI7QOSzIxe3t0WSm&country.x=BR&locale.x=BR' }
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
                  {site.isLocal ? (
                    <HybridLink to={site.url}>
                      {site.title}
                    </HybridLink>
                  ) : (
                    <HybridLink href={site.url}>
                      {site.title}
                    </HybridLink>
                  )}
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