import React, { useState, useEffect } from "react";

const styles = {
  searchBarContainer: {
    width: "90%",
    height: "100px",
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "flex-start",
    boxShadow: "0px 0px 20px black",
    borderRadius: "15px",
  },
};

export default function Search(props) {
  const { onSearch } = props;

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
      >
        <div style={styles.searchBarContainer}>
          <div style={{ marginTop: "5px", marginLeft: "5px" }}>
            <input
              type="text"
              placeholder="Search"
              onChange={onSearch}
              style={{
                borderRadius: "6px",
                border: "none",
                boxShadow: "0px 0px 20px black",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
