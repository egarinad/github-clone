import React from "react";
import "../scss/result.scss";
import norep from "../img/norep.png";
import Pagination from "./Pagination";

const Result = ({ repos }) => {

  return (
    <div className="repos">
      <div className="name">
        {repos.length === 0 ? "" : `Repositories (${repos.length})`}
      </div>

      {repos.length !== 0 ? (
        <Pagination repos={repos} />
      ) : (
        <div className="norep">
          <img className="norep__img" src={norep} alt="" />
          <div className="norep__text">Repository list is empty</div>
        </div>
      )}
    </div>
  );
};

export default Result;
