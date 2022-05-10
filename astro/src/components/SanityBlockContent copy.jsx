import {h} from 'preact';

import { PortableText } from '@portabletext/react'
import urlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'

// Barebones lazy-loaded image component
const ImageComponent = ({value}) => {
  const {width, height} = getImageDimensions(value)
  return (
    <img
      src={urlBuilder().image(value).width(800).fit('max').auto('format').url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}

const serializers = {
  types: {
    code: ({value}) => <code-block code={value.code} language={value.language}></code-block>,
    image: ImageComponent
  }
}

export default function SanityBlockContent({blocks}) {
  return (
    <PortableText value={blocks} components={serializers} />
  )
}