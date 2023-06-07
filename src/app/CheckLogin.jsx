'use client'
//import React from "react";
import {useState} from "react";

function Check(login){
    let Login = false;
    console.log("Checking for AuthToken...");
    console.log(localStorage.getItem('AuthToken'));

    if(localStorage.getItem('AuthToken')===null){
        Login=false;
    }
    else{
        console.log("found Authtoken")
        console.log("Checking");
        Login = true;
}
return Login;
}
//Check();

export default Check;
