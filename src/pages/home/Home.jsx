import React from 'react';
import "./home.scss";
import { Outlet } from 'react-router';

const Home = () => {
  return (
    <div className="home">
        Home
        <Outlet/>
    </div>
  )
}

export default Home