import React from 'react';

export default (props) => {
  return (
    <nav role="navigation">
      <div className="menu__toggle">

        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul className="menu">
          {props.links.map((link, i) => <a key={i} href="#"><li>{link}</li></a>)}
        </ul>
      </div>
    </nav>
  )
}