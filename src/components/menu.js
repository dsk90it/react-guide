import React from "react";
import { Link } from "react-router-dom";

const navData = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/about", text: "About" },
];

const Menu = ({ links = navData }) => {
  return (
    <ol>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        );
      })}
    </ol>
  );
};

export default Menu;
