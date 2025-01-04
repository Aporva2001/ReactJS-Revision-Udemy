
import { createRoot } from "react-dom/client";
import 'bulma/css/bulma.css'
import "./styles.css";
import App from "./App.js";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
