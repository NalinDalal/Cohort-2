//"use client";
import axios from "axios";
import { useEffect, useState } from "react";

// asynchronous data fetching function, pretiffy the ui, from the server side, not on client side
async function getUserDetails() {
  const response = await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details",
  );
  return response.data;
}
async function getUserDetails1() {
  try {
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
export default async function Home() {
  const userData = await getUserDetails(); //runs on the server

  const userData1 = await getUserDetails1();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            <div>Name: {userData?.name}</div>

            {userData?.email}
          </div>

          <div>
            Name1: {userData1?.name}
            {userData1?.email}
          </div>
        </div>
      </div>
    </div>
  );
}
