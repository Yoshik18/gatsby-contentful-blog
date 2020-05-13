import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const BlogPost = ({ data }) => {
  const post = data.contentfulBlog

  return (
    <div>
      <SEO title={post.title} />
      <Header></Header>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-12">
            <h1
              className="text-center p-2 font-weight-bold"
              dangerouslySetInnerHTML={{ __html: post.title }}
            ></h1>
            <p className="text-center">{post.datePublished}</p>
            <div className="text-center">
              <img
                className="text-center img-fluid"
                src={post.thumbnail.resize.src}
                alt="Single Post"
              />
            </div>
            <div className="col-12 d-block mx-auto">
              <div className="m-2">
                {documentToReactComponents(post.body.json)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
export default BlogPost

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      thumbnail {
        resize(quality: 50, width: 850, height: 500) {
          src
        }
      }
      title
      datePublished(formatString: "MMMM DD, YYYY")
      body {
        json
      }
    }
  }
`
