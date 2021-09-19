import { ChakraProvider } from "@chakra-ui/react"
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import Navigation from '../components/Navbar'
import Footer from '../components/Footer'
import theme from "../theme"

import "./index.css"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
