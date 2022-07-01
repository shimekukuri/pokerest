import React, { useState, useEffect } from "react";

export default function Pokecard(props) {
  const { pokemon } = props;

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", marginTop: "15px"}}>
        <div
          style={{
            width: "90%",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div
            id="pokediv"
            style={{ width: "20%", backgroundColor: "yellow", padding: "5px", margin: "10px"}}
          ></div>
        </div>
      </div>
    </>
  );
}
