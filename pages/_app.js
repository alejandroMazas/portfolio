import '../styles/globals.css'
import Navibar from '../components/navibar'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navibar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
