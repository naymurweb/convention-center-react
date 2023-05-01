import React from "react";

const NavLink = (props) => {
  return (
    <li className="nav-item">
      <a className={`nav-link ${props.active}`} aria-current="page" href="/">{props.page}</a>
    </li>
  );
};

export default NavLink;
