import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";
import Sdata from './Sdata';

//console.log(Sdata[0].name)

function ncard(val){
    console.log(val);
    return(
<Card
imgsrc={val.imgscr}
title={val.title}
sname={val.sname}
link={val.links}
/>

   );

}


ReactDOM.render(
    <>
    <h1 className="heading_style">List of Top 5 Netflix Oroginals Series in 2020</h1>

{Sdata.map(ncard)}
</>,
    document.getElementById("root")
);
