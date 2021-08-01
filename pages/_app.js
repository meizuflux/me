import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import Navigation from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DefaultSeo {...SEO} />
      <Navigation />
      
      <Component {...pageProps} />

      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
