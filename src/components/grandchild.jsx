import React,{ useContext,useState, useEffect } from "react";
import { AppContext } from "../appContext";
import axios from 'axios';
export default function GrandChild(){
    const {AppName}=useContext(AppContext);
   const [productList,setProductList]= useState([]);    
    useEffect(()=>{
    getProductList();
    },[]);
    const getProductList=async()=>{
      const response=await  axios.get('https://dummyjson.com/products');
    //     // handle success
       setProductList(response['data']['products']);
    // console.log(response['data']['products']);
    // console.log(response);
     
    }
    return (
        <div>
        <h1>I am GrandChild: {AppName}</h1>
        <span>Peoduct list</span><br/>
       {
           productList.map((product)=>{
              return (
                <>
                <img src={product.images[0]} height={'100px'} width={'100px'} alt="images"/><br/>
                <span>Name: {product.title}</span><br/>
                <span>Price: {product.price}</span><br/>
                </>
                );
               
           })
       }
        </div>
    );
}