import React from 'react'
import Image from 'next/image'
import { PropsForComponentWithProps } from '@/types/types'

const ComponentWithProps = ({
  header,
  headerImages,
  altText
}: PropsForComponentWithProps) => {
  return (
    <section>
      <h1>{header}</h1>
      <Image height={40} width={40} src={headerImages[0]} alt={altText!} />
    </section>
  )
}

// <ComponentWithProps header='Title' headerImage='./headerimage.svg' altText='logo'>

export default ComponentWithProps
