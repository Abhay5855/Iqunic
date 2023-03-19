import React from "react";
import "./home.scss";
import vector from "../../assets/images/circle.png";
const Home = () => {
  return (
    <>
      <div className="home__section">
        <div className="home__main">
          <div className="home__banner">
            <div className="home__section1">
            <h1 className="home__text">Start Thinking Out Of The Box Right Now</h1>
            <h4 className="home__desc">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur
           
            </h4>
            <button className="home__button">
              Get Started
            </button>
            </div>
            <div className="home__section2">
              
            </div>
          </div>

          <img className="vector__img" src={vector} alt="img"/>
        </div>
      </div>
    </>
  );
};

export default Home;
