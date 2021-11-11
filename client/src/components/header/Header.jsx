import "./header.css"
import headerPic from './header.jpg'
// import { Component } from "react";

// const picPath = process.env.PUBLIC_URL + "./assets/pics/";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Ancitent Japanese artists used art as a vehicle to express there political and religious identity.</span>
                <span className="headerTitleLg">The study of Ancient Japanese Art</span>
            </div>
            <img 
                className="headerImg"
                // src={`${picPath}purpleFlowers.jpg`} 
                // src="https://cdn2.webdamdb.com/1280_2Ynj3cqRffO0.jpg?1624377590" 
                src = {headerPic}
                alt="" 
            />
        </div>
    )
}
