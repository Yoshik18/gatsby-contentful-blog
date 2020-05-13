import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
        }
      }
    }
  `)
  return (
    <Helmet>
      <title>
        {title} | {data.site.siteMetadata.defaultTitle}
      </title>
      <meta
        name="description"
        content={description || data.site.siteMetadata.defaultDescription}
      />
    </Helmet>
  )
}

export default SEO
