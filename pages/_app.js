import { GlobalStyles } from "twin.macro";
import "antd/dist/antd.css";

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;
