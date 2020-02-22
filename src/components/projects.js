import React from "react";
import mytoday_img from '../img/mytoday.png';
import github from '../img/github.png';
import link_img from '../img/link.png'

export default function Projects(){
    return(
        <div className="project_cover">
            <div className="project">
                <img src={mytoday_img} className="project_img"></img>
                <h3 className="project_Title">My Today</h3>
                <p className="project_description">
                    간단하게 일기쓰는 웹페이지를 만들어봤습니다.
                </p>
                <a href="https://github.com/mainvoid95/MyToday"><img className="github" src={github}></img></a>
                <a href="https://mytoday.ml"><img className="link_img" src={link_img}></img></a>
            </div>
        </div>
    )
}

