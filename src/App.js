import React, { useState} from "react";
import "./scss/_base.scss";
import "./scss/input.scss";
import gitHubImage from "./img/Vector.png";
import searchImage from "./img/search-image.png";
import searchSmall from "./img/small-search.png";
import axios from "axios";

import Output from "./components/Output";

const App = () => {
  const [input, setInput] = useState("");
  const [repos, setRepos] = useState([]);
  const [info, setInfo] = useState([]);
  const [isFind, setFind] = useState(true)

  const [loading, setLoading] = useState(false);
  const [isSearch, setSearch] = useState(false);



  const search = async (e) => {
    if (e.key === "Enter") {
      setSearch(true);
      setLoading(true);
      try {
        const result_rep = await axios(
          `https://api.github.com/users/${input}/repos`
        );
        const result_info = await axios(
          `https://api.github.com/users/${input}`
        );
        setFind(true);
        setRepos(result_rep.data);
        setInfo(result_info.data);
        setLoading(false);
      } catch (err) {
        setFind(false)
        setLoading(false);
        console.log(err);
      }
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="wrapper">
      <div className="input-bar">
        <div className="input-bar-container">
          <a href="https://github.com/" target="_blank">
            <img src={gitHubImage} className="input-bar__github-image" alt="" />
          </a>
          <div className="input-bar__box box">
            <img className="box__image" src={searchSmall} alt="" />
            <input
              type="text"
              className="box__input"
              placeholder="Enter GitHub username"
              onChange={handleChange}
              value={input}
              onKeyPress={search}
            />
          </div>
        </div>
      </div>



      {isSearch ? (
            <Output info={info} repos={repos} loading={loading} isFind={isFind}/>
      ) : (
        <div className="search">
          <img className="search__image" src={searchImage} alt="" />
          <div className="search__text">Start with searching a GitHub user</div>
        </div>
      )}
    </div>
  );
};

export default App;
