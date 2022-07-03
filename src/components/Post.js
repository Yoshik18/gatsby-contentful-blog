import React from "react"
// import { Link } from "gatsby"
import { Card } from "react-bootstrap"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const Post = props => {
  return (
    <AniLink cover hex="#5c65ca" className="no-decor" to={props.slug}>
      <Card className="mb-4 post-card">
        <Card.Img variant="top" src={props.image} alt="Main Post" />
        <Card.Body>
          <Card.Text className="m-0 mb-1 text-muted">{props.date}</Card.Text>
          <Card.Title>
            <h4>
              <span
                className="hover-underline"
                dangerouslySetInnerHTML={{ __html: props.title }}
              ></span>
            </h4>
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
