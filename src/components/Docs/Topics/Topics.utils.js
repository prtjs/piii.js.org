import React from 'react'
import { filterObj } from '../../../utils'
import { Link as GatsbyLink } from 'gatsby'

export const GatsbyLinkForSC = ({ ...props }) => {
  props = filterObj(props, (prop) => !/^sc/.test(prop))

  return <GatsbyLink {...props} />
}