import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/pageOne">
          <li>page one</li>
        </Link>
        <Link to="/pageTwo">
          <li>page two</li>
        </Link>
      </nav>
    </div>
  );
};
