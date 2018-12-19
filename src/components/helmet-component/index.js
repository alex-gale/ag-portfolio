import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

const HelmetComponent = () => (
  <StaticQuery
    query={graphql`
      query helmetData {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => (
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
    )}
  />
)

export default HelmetComponent
