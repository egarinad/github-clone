import React from "react";
import "../scss/result.scss"
import norep from "../img/norep.png"

const Result = ({ repos }) => {
      console.log(repos.length)
  return (
    <div className="repos">
          <div className="name">
                {repos.length===0 ? "" : `Repositories (${repos.length})`}
          </div>
            <ul className="list-of-rep">
            {repos.length !== 0 ? (
            repos.map((rep, i) => (
                  <li className="list-of-rep__item item" key={i}>
                  <a className="item__name" href={rep.html_url} target="_blank">
                  {rep.name}
                  </a>
                        <div className="item__description">
                              {rep.description===null ? "There isn't any description" : rep.description }
                        </div>
                  </li>
          ))
        ) : (
          <div className="norep">
                <img className="norep__img" src={norep} alt=""/>
                <div className="norep__text">Repository list is empty</div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Result;
