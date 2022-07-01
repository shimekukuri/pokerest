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
            style={{ width: "25px", height: "25px", backgroundColor: "yellow" }}
          ></div>
        </div>
      </div>
    </>
  );
}
