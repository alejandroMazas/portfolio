import '../styles/globals.css'
import Navibar from '../components/Navibar/Navibar'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navibar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
