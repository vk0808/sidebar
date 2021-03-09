import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./Context";

const Home = () => {
  const data = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">show modal</button>
    </main>
  );
};

export default Home;
