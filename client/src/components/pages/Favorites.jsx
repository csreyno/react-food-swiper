import React from "react";
import FavCard from "./FavCard";
export default function Favorites() {
  return (
    <div>
      <br />
      <br />

      <div className="myrecipes">
        <br />
        <h1 className="PageTitle">My Favorites</h1>
        <br />
        <br />
        <FavCard />
      </div>
    </div>
  );
}
