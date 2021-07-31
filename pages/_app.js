import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import Navigation from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DefaultSeo {...SEO} />
      <Navigation />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
