module.exports = {
  siteMetadata: {
    title:       'Piii.js',
    description: 'Um avançado filtro de palavrões.',
    author:      'Matheus Alves (@theuves)',
  },

  /**
   * PLUGINS
   */
  plugins: [
    'gatsby-plugin-react-helmet',

    /**
     * Dá acesso às imagens
     */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },

    /**
     * Dá acesso às documentações
     */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/docs`,
      },
    },

    'gatsby-transformer-sharp',

    'gatsby-plugin-sharp',

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name:             'Piii.js',
        short_name:       'Piii.js',
        start_url:        '/',
        background_color: '#303952',
        theme_color:      '#303952',
        display:          'minimal-ui',
        icon:             'src/images/icon.png'
      }
    },

    /**
     * Permite a exportação do CSS do styled-components
     */
    'gatsby-plugin-styled-components',

    /**
     * Interpreta o markdown
     */
    'gatsby-transformer-remark',

    /**
     * Estiliza blocos de códigos do markdown
     */
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix:      'language-',
              inlineCodeMarker:  null,
              aliases:           {},
              showLineNumbers:   false,
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
  ],
}
