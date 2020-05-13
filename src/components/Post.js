import React from "react"
import { navigate } from "gatsby"
import { Card } from "react-bootstrap"
const Post = props => {
  return (
    <div onClick={() => navigate(props.slug)} className="no-decor">
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
    </div>
  )
}

export default Post
