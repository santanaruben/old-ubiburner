import React from "react";

export default function CurrentBurnRequest(props) {
  return (
    <div style={{ marginTop: "-15px" }}>
      <img
        src="/flame2.png"
        alt="flame2"
        // style={{ left: "65%" }}
        width="50px"
      />
      <div
        className="nes-container is-dark with-title"
        style={{
          wordBreak: "break-word",
          width: "-webkit-fill-available",
          textAlign: "center",
          minHeight: "195px",
        }}
      >
        <p className="title">Current Burn Request</p>
        <p style={{ marginBottom: "0px" }}>
          Amount Out Min: {props.data.amount}
        </p>
        <br />
        <p style={{ marginBottom: "0px" }}>Requester: {props.data.requester}</p>
        <br />
        <p style={{ marginBottom: "0px" }}>{props.children}</p>
      </div>
    </div>
  );
}
