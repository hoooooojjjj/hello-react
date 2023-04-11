import React from "react";
import world from "./world";

export default function Hello(){
    return(
        <>
        <h1>
            Hello,
            <world name="world" />!
        </h1>
        <img src="cat.jpg" alt="cat" />
        </>
    );
}