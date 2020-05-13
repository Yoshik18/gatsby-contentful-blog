import React from "react"
// import { Link } from "gatsby"
import { Card } from "react-bootstrap"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const Post = props => {
  return (
    <AniLink cover hex="#c398ff" className="no-decor" to={props.slug}>
      <Card className="mb-4 post-card">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Text className="m-0 mb-1 text-muted">{props.date}</Card.Text>
          <Card.Title>
            <h3>
              <span
                className="hover-underline"
                dangerouslySetInnerHTML={{ __html: props.title }}
              ></span>
            </h3>
          </Card.Title>
          <Card.Text
            className="mb-5"
            dangerouslySetInnerHTML={{ __html: props.excerpt }}
          ></Card.Text>
        </Card.Body>
      </Card>
    </AniLink>
  )
}

export default Post
