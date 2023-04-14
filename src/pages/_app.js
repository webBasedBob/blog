import "@/styles/globals.scss";
let themes = [
  "primereact/resources/themes/viva-light/theme.css",
  "primereact/resources/themes/viva-dark/theme.css",
  "primereact/resources/themes/mira/theme.css",
  "primereact/resources/themes/nano/theme.css",
  "primereact/resources/themes/saga-blue/theme.css",
  "primereact/resources/themes/saga-green/theme.css",
  "primereact/resources/themes/saga-orange/theme.css",
  "primereact/resources/themes/saga-purple/theme.css",
  "primereact/resources/themes/vela-blue/theme.css",
  "primereact/resources/themes/vela-green/theme.css",
  "primereact/resources/themes/vela-orange/theme.css",
  "primereact/resources/themes/vela-purple/theme.css",
  "primereact/resources/themes/arya-blue/theme.css",
  "primereact/resources/themes/arya-green/theme.css",
  "primereact/resources/themes/arya-orange/theme.css",
  "primereact/resources/themes/arya-purple/theme.css",
];
//theme
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";

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
