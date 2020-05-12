import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const BlogPost = ({ data }) => {
  const post = data.contentfulBlog

  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-xs-12">
            <h1
              className="text-center p-2 font-weight-bold"
              dangerouslySetInnerHTML={{ __html: post.title }}
            ></h1>
            <p className="text-center">{post.datePublished}</p>
            <div className="text-center">
              <img
                className="text-center"
                src={post.thumbnail.resize.src}
                alt="Main"
              />
            </div>
            <div className="col-8 d-block mx-auto">
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
        resize(quality: 50, width: 900, height: 450) {
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
