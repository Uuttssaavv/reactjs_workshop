import React from "react";
import Child from './child';
export default function Parent(){
    return (
        <div>
        <h1>I am Parent</h1>
        <h2>Child content below parent.js</h2>
        <Child/>
        </div>
    );
}