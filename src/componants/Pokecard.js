import React, { useState, useEffect } from "react";

export default function Pokecard(props) {
  const { pokemon } = props;

  return (
    <>
      <div style={{width: "100%", backgroundColor: "red"}}>
        <img src={pokemon} />
      </div>
    </>
  );
}
