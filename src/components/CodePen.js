import React from 'react'
import styled from 'styled-components'

const THEME_ID = 12945

const Iframe = styled.iframe`
  width: 100%;
  height: ${(props) => props.penHeight}px;
  border: none;
  overflow: hidden;
`

const CodePen = ({
  penId,
  penUser,
  penHeight = 300,
  penTitle
}) => {
  const url = new URL(`https://codepen.io/${penUser}/embed/${penId}`)

  url.searchParams.set('height', penHeight)
  url.searchParams.set('theme-id', THEME_ID)
  url.searchParams.set('default-tab', 'result,js')

  return (
    <Iframe
      src={url.href}
      penHeight={penHeight}
      title={penTitle}
    />
  )
}

export default CodePen