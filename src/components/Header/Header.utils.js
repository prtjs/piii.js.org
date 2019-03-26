import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

/**
 * Componente Link que pode aceitar tanto link interno quanto externo.
 *
 * Gist: <https://gist.github.com/theuves/079ac0fbb4047e8e676e7237195a96d0>
 */
export const HybridLink = ({ children, ...props }) => {
  if (!props.href) {
    return (
      <GatsbyLink {...props}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a {...props}>
      {children}
    </a>
  )
}