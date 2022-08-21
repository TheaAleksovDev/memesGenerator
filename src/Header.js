import React from "react"
import logo from "./Logo.png"
export default function Header(){
    return(
        <div className="header">
            <img src={logo}></img>
            <h3 className="desc">React Course - Project 3</h3>
        </div>
    )
}