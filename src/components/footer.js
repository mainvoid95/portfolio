import React from "react"
import Github from '../img/GitHub.png';

export default function footer(){
    return(
        <footer>
            <a href="https://github.com/mainvoid95"><img className="github" src={Github}></img></a>
        </footer>
    )
}