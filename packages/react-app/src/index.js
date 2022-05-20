import React from "react";
import ReactDOM from "react-dom";
import MyErrorBoundary from "./Errors/MyErrorBoundary";
import { DAppProvider, Mainnet } from "@usedapp/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "nes.css/css/nes.min.css";
import "nes.icons/css/nes-icons.min.css";
import "@fontsource/press-start-2p";
import "./custom.css";
import App from "./App";

const INFURA_PROJECT_ID = "f8d84918ff1c4f0b8bd36351073a890e";
const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: "https://mainnet.infura.io/v3/" + INFURA_PROJECT_ID,
    // process.env.REACT_APP_INFURA_ID,
  },
}

ReactDOM.render(
  <MyErrorBoundary>
    <ToastContainer />
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </MyErrorBoundary>,
  document.getElementById("root")
);
