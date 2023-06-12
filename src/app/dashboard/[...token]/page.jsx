"use client";

import React from "react";
import test from "@/app/dashboard/[...token]/Check.jsx";
import Check from "@/check.jsx";
import { useState, useEffect } from "react";
function dashboard({ params }) {
 
  Check(params.token[0]);
  const [useData, setUseData] = useState(["Hello"]);
  useEffect(() => {
    //call the test function and then set the state on useData to the data returned by the function
    test(params.token).then((data) => {
      setUseData(data);
    });
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <h1>{useData.name}</h1>
      <h1>{useData.email}</h1>
      <h1>{params.token}</h1>
    </>
  );
}

export default dashboard;
