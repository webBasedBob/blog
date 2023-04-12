import "@/styles/globals.scss";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

import PrimeReact from "primereact/api";
// PrimeReact.appendT = "self";
PrimeReact.ripple = true;
PrimeReact.cssTransition = true;
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
