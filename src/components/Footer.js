import React from "react"
import { SocialIcon } from "react-social-icons"

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="d-flex justify-content-around">
        <div>&copy; DigBizCards.in 2020</div>

        <div>
          <SocialIcon
            url="https://facebook.com/digbizcards/"
            target="_blank"
            style={{ width: 40, height: 40, marginRight: 20 }}
          />
          <SocialIcon
            url="https://instagram.com/digbizcards/"
            target="_blank"
            style={{ width: 40, height: 40, marginRight: 20 }}
          />
          <SocialIcon
            url="mailto:support@digbizcards.in"
            target="_blank"
            style={{ width: 40, height: 40 }}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
