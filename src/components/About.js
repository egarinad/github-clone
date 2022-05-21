import React from 'react';
import following from "../img/following.png"
import follow from "../img/follow.png"
import "../scss/about.scss"

const About = ({info}) => {
    return (
          <div className="info">
                <img className="info__img" src={info.avatar_url} alt=""/>
                <div className="info__name">
                      {info.name}
                </div>
                <div className="info__login">
                      <a className="link" href={info.html_url} target="_blank">{info.login}</a>
                </div>
                <div className="info__follow follow-info">
                      <div className="follow-info__followers followers">
                            <img className="followers__img" src={follow} alt=""/>
                            <div className="followers__info">
                                  {info.followers} followers
                            </div>
                      </div>
                      <div className="follow-info__followings followings">
                            <img className="followings__img" src={following} alt=""/>
                            <div className="followings__info">
                                  {info.following} following
                            </div>
                      </div>
                </div>
          </div>
    );
};

export default About;