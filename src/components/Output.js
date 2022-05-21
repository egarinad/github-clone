import React from "react";
import "../scss/output.scss";
import user from "../img/usernf.png"
import About from "./About";
import Result from "./Result";
import searchImage from "../img/search-image.png";

const Output = ({ info ,repos, loading, isFind }) => {

  if (loading) {
      return (
            <div className="output-loader">
                  <div className="loader"></div>
            </div>
      );
  }

  return (
        <div className="output">
              {isFind===true ? (
                    <div className="output-container">
                        <About info={info}/>
                        <Result repos={repos}/>
                    </div>
              ) :
              (
                    <div className="not-found">
                          <div className="not-found-container">
                              <img className="not-found__image" src={user} alt="" />
                              <div className="not-found__text">User not found</div>
                          </div>
                    </div>
              ) }
        </div>
  );
};

export default Output;
