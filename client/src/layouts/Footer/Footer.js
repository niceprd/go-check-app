import { NavLink } from 'reactstrap'
import React from 'react'

import './Footer.scss'
import location from '../../assets/icons/icon-05.png'
import logo from '../../assets/images/go-check-logo.png'
import mail from '../../assets/icons/icon-07.png'
import tel from '../../assets/icons/icon-06.png'

function Footer() {
  return (
    <div className="footer">
      <div className="area"> </div>
      <div className="footer-detail d-grid">
        <div className="logo">
          <img src={logo} alt="logo" width="250" />
        </div>
        <div className="contact-title">
          <div className="item">
            <div className="tag-name">
              <img src={location} alt="location" width="70" className="left" />
              <div className="d-inline right">Address:</div>
            </div>
            <div className="tag-name">
              <img src={tel} alt="tel" width="70" className="left" />
              <div className="d-inline right">Phone:</div>
            </div>
            <div className="tag-name mail">
              <img src={mail} alt="mail" width="70" className="left" />
              <div className="d-inline right">E-mail:</div>
            </div>
          </div>
        </div>
        <div className="contact-detail">
          <div className="item">
            <div className="tag-detail">69 ซอย สุวรรณสวัสดิ์ แขวง ทุ่งมหาเมฆ เขต สาทร กรุงเทพมหานคร 10120</div>

            <div className="tag-detail">
              <NavLink href="tel:+66987865592">098 786 5592</NavLink>
            </div>
            <div className="tag-detail mail">
              <NavLink href="mailto:pichit@lyfegroup.io">pichit@lyfegroup.io</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
