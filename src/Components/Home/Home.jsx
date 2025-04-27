import React from 'react';
import { Link } from 'react-router';
import './Home.css';

const Home = () => {
    return (
        <div
  className="hero h-[650px] max-w-3/4 mx-auto items-center mt-40"
  style={{
    backgroundImage:
      "url(https://i.ibb.co.com/SX8fGqwm/1718099384778.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello Guys</h1>
      <p className="mb-5">
        This is my First Email Authentication Development.
        
      </p>
      <Link to='/signup'><button className="fancy-btn">Click On Me  </button></Link>
    </div>
  </div>
</div>
    );
};

export default Home;