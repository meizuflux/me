// theme.js
import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        color: "white",
      },

      nav: {
          bg: "#212121"
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
})

export default theme;