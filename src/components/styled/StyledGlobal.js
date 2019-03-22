import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Luckiest+Guy');
  @import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:focus {
      outline: dashed;
      outline-width: .5px;
    }
    &::selection {
      background-color: #ddd;
    }
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
  }
`