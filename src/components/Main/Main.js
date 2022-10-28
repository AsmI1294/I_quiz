import React from "react";

import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Main.css";

const Main = () => {
  return (
    <div className="pos">
      <Navigation></Navigation>

      <Outlet></Outlet>

      <footer className="foot bg-dark text-light">
        <p>© IQuizBD</p>
      </footer>
    </div>
  );
};

export default Main;
