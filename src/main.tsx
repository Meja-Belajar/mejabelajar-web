import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./redux/store.ts";
import { NextUIProvider } from "@nextui-org/react";

import Router from "@src/router/Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <NextUIProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </NextUIProvider>
    {/* </React.StrictMode> */}
  </Provider>,
);
