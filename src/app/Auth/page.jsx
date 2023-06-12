'use client'
import React from 'react'
import Login from "./Login/page.jsx"
import SignUp from "./SignUp/page.jsx"
import LoginChooser from "./LoginChooser/page.jsx";
import { redirect } from 'next/navigation'

export default function page  () {
  function checkAuthToken() {
    var cookies = document.cookie.split(';');
    console.log(document.cookie);
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
  
      if (cookie.startsWith("auth=")) {
        var authToken = cookie.substring("auth=".length);
        //window.location.href = "/dashboard/" + authToken;
        redirect("/dashboard/" + authToken);
        break;
      }
    }
    return false;
  }
  

  return (
    <div>
      {checkAuthToken()?"":<LoginChooser></LoginChooser>}
    </div>
  )

}
