import React, { useState, useEffect } from "react";

const styles = {
  searchBarContainer: {
    width: "100%",
    height: "100px",
    backgroundColor: "blue"
  },
};

export default function Search () {
  return (
    <>
      <div style={styles.searchBarContainer}></div>
    </>
  );
}
