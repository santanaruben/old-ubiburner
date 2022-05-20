import React from "react";

export default function Tokens(props) {
  return (
    <>
      <div
        className="nes-container is-dark with-title"
        style={{
          wordBreak: "break-word",
          width: "-webkit-fill-available",
          textAlign: "center",
        }}
      >
        <p className="title">Tokens Balances</p>
        <div
          className="nes-table-responsive"
          style={{
            wordBreak: "break-word",
            width: "-webkit-fill-available",
            display: "grid",
          }}
        >
          <table className="nes-table is-bordered is-dark">
            <thead>
              <tr>
                <th>Token</th>
                <th style={{ minWidth: "100px" }}>Balance</th>
              </tr>
            </thead>
            <tbody>
              {
                // pushers &&
                props.items.map((b, i) => {
                  return (
                    <tr key={i}>
                      <td>{b.token}</td>
                      <td>{b.amount}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
