import React from 'react';
import Logo from '../static/images/logo.png';
import Hamburger from '../components/Hamburger';

export default (props) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <Hamburger links={props.links} />
          <div className="header__logo">
            <img src={Logo} />
          </div>
          <nav className="nav">
            {props.links.map((link, i) => <a key={i} className="nav__link" href="#">{link}</a>)}
          </nav>
        </div>
      </div>
    </div>
  )
}
