import React,{ useContext } from "react";
import { AppContext } from "../appContext";
export default function GrandChild(){
    const {AppName}=useContext(AppContext);
    return (
        <div>
        <h1>I am GrandChild: {AppName}</h1>
        </div>
    );
}