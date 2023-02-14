import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

// for redux
import { Provider } from "react-redux";
<<<<<<< HEAD
import { store } from "./redux/store";
=======
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
>>>>>>> 4affa5a16cbc15e0c955097fd99167a2544f4b2d

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
