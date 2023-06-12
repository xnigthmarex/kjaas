
"use client";
import { redirect } from 'next/navigation'

function Check(params) {
  var cookies = document.cookie.split(";");
  if (document.cookie.indexOf(params.token[0].toString()) <= -1) {
    console.log("cookie not found");
    document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    redirect("/Auth");
  }
}

export default Check;
