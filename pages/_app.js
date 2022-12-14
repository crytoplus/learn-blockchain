import '../styles/globals.css'
import Layout from '../components/layout'
import '@mui/material'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
