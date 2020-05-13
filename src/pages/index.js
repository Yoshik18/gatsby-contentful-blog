import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { graphql } from "gatsby"
import Post from "../components/Post"

const index = ({ data }) => {
  return (
    <PrimaryLayout>
      {data.allContentfulBlog.nodes.map(node => (
        <div className="col-md-4">
          <Post
            date={node.datePublished}
            slug={node.slug}
            title={node.title}
            excerpt={
              node.excerpt === null
                ? ""
                : node.excerpt.substring(0, 100) + "..."
            }
            image={node.thumbnail.resize.src}
          />
        </div>
      ))}
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allContentfulBlog(sort: { fields: datePublished, order: DESC }) {
      nodes {
        excerpt
        thumbnail {
          resize(width: 800, height: 500) {
            src
          }
        }
        title
        datePublished(formatString: "MMMM DD, YYYY")
        slug
      }
    }
  }
`

export default index
