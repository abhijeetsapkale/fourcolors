import 'antd/dist/antd.css';
import '../styles/common.css';
import '../styles/login.css';
import '../styles/main.css';
import NoSSRWrapper from "../components/no-ssr-wrapper";
function MyApp({ Component, pageProps }) {
  return (
    <NoSSRWrapper>
    <Component {...pageProps} />
    </NoSSRWrapper>
  )
}

export default MyApp
