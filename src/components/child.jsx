import React from "react";
import GrandChild from "./grandchild";
export default function Child(){
    return (
        <div>
        <h1>I am Child</h1>
        <GrandChild/>
        </div>
    );
}