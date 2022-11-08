import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiWineBottle } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
function App() {
  return (
    <>
      <div className="body ">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-md-4 px-5 ">
              <h1>10 simple ways</h1>
              <h2>TO MANAGE SUGAR</h2>
              <p className="text-muted my-4">
                As we go about our hectic, busy days, it can be very easy to
                resort to a sugary snack midway through the afternoon to keep
                your energy levels elevated
              </p>
              <button className="button">read more</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-5">
              <div className="card text-center">
                <h1 className="card-title my-4">
                  <GiWineBottle />
                </h1>
                <h4 className="card-title my-2">Drink apple cider vinegar </h4>
                <p className="card-text my-4 mb-5 p-3 ">
                  According to Sepel, adding one or two tablespoons of apple
                  cider vinegar to a large bottle of water
                </p>
              </div>
            </div>
            <div className="col-md-4 p-5">
              <div className="card text-center">
                <h1 className="card-title my-4">
                  <IoFastFoodOutline />
                </h1>
                <h4 className="card-title my-2">Keep to regular mealtimes </h4>
                <p className="card-text my-4 mb-5 p-3">
                  This may seem like an obvious suggestion, but eating your
                  meals at regular, spaced out intervals
                </p>
              </div>
            </div>
            <div className="col-md-4 p-5">
              <div className="card text-center">
                <h1 className="card-title my-4">
                  <GiFruitBowl />
                </h1>
                <h4 className="card-title my-2 ">Eat fruit in the morning </h4>
                <p className="card-text my-4 mb-5 p-3">
                  We’re told that we should eat five portions of fruits and
                  vegetables a day in an effort to maintain a healthy lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-dark text-white text-center">
          <h5 className=" py-5">Sample footer text</h5>
          <div className="footer d-flex justify-content-center">
            <a href="#">Template</a>
            <p>created with</p> <a href="#a">Nicepage</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
