import BlockContent from '@sanity/block-content-to-react';
import { getSanityImageUrl } from '../utils/helpers.js'
//import urlBuilder from '@sanity/image-url'
//import { getImageDimensions } from '@sanity/asset-utils'

// Barebones lazy-loaded image component
/*const ImageComponent = ({node}) => {
  console.log(node)
  const {width, height} = getImageDimensions(node)
  return (
    <img 
      src={urlBuilder().image(node).width(800).fit('max').auto('format').url()}
      alt={node.alt || ' '}
      loading="lazy"
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}*/

const serializers = {
  types: {
    code: ({node}) => <code-block code={node.code} language={node.language}></code-block>,
    file: ({node}) => {
      const { asset } = tryGetFile(node?.asset?._ref, {
        // put your own envs
        dataset: import.meta.env.PUBLIC_SANITY_DATASET,
        projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
        token: import.meta.env.PUBLIC_SANITY_READ_TOKEN,
      });
      return asset?.url && <a href={asset.url} target="_blank">{node.description}</a>
    },
    image: ({node}) => <img src={`${getSanityImageUrl(node).url()}`} alt="" loading="lazy"/>,
    link: ({node, children}) => <a href={`${node}`} rel="external" target="_blank">{children}</a>,
  },
}

export default function SanityBlockContent({blocks}) {
  return (
    <BlockContent blocks={blocks} serializers={serializers} />
  )
}