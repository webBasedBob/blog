import "@/styles/globals.scss";
//theme
import "../theming/mytheme/theme.scss";
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

import PrimeReact from "primereact/api";
PrimeReact.ripple = true;
PrimeReact.cssTransition = true;
import { Provider } from "react-redux";
import store from "../store/index";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
