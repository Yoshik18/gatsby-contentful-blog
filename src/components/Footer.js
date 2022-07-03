import React from "react"
import { SocialIcon } from "react-social-icons"

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="d-flex justify-content-around">
        <div>Copyright © 2022 KayHosting. All rights reserved </div>

        <div>
          <SocialIcon
            rel="noreferrer noopener"
            url="https://facebook.com/kayhosting/"
            target="_blank"
            style={{ width: 40, height: 40, marginRight: 20 }}
          />
          <SocialIcon
            rel="noreferrer noopener"
            url="https://instagram.com/kayhosting/"
            target="_blank"
            style={{ width: 40, height: 40, marginRight: 20 }}
          />
          <SocialIcon
            rel="noreferrer noopener"
            url="mailto:support@kayhosting"
            target="_blank"
            style={{ width: 40, height: 40 }}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
