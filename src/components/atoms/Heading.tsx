import React, { createElement } from 'react'

type HeadingProps = {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
} & React.HTMLAttributes<HTMLDivElement>

function Heading({ type, children }: HeadingProps) {
  return (
    <div>Heading</div>
  )
}

export default Heading