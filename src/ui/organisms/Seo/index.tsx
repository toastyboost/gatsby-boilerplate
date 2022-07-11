import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'

type SeoProps = {
  lang?: string
  title?: string
  description?: string
  keywords?: string
  image?: string
}

const Seo = ({
  lang = 'en',
  title = '',
  description = '',
  keywords = '',
  image = '',
}: SeoProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  )

  return (
    <Helmet>
      <html lang={lang} />
      <title>{site.siteMetadata?.title}</title>
      <meta
        name="description"
        content={description || site.siteMetadata.description}
      />
      <meta name="keywords" content={keywords} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui, viewport-fit=cover"
      />

      <meta name="imagetoolbar" content="no" />
      <meta name="msthemecompatible" content="no" />
      <meta name="cleartype" content="on" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="address=no" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description || site.siteMetadata.description}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site} />
      <meta property="og:image" content={`${site}/${image}`} />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:width" content="315" />
    </Helmet>
  )
}
export { Seo }
