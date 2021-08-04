import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Flex, useColorMode, Box, Button, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

import DarkModeSwitch from '../components/DarkModeSwitch'

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  transition: height .5s, line-height .5s;
`

const Navigation = () => {
    const { colorMode } = useColorMode()
    const bg = useColorModeValue("white", "gray.800")
    const router = useRouter()

    const hoverBg = {
        light: 'gray.100',
        dark: 'gray.700',
    }

    const navBg = {
        light: "white",
        dark: "gray"
    }

    const links = [
        ["Home", "/", 1],
        ["Blog", "/blog", 2],
        ["Projects", "/projects", 3]
    ]

    const rendered = []
    for (let [name, href, index] of links) {
        let c = null
        if (router.pathname === href) {
            c = hoverBg[colorMode]
        }
        rendered.push(
            <NextLink href={href} passHref key={index}>
                    <Button
                        key={index}
                        as="a"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{ backgroundColor: hoverBg[colorMode] }}
                        backgroundColor={c}
                        aria-label={name}
                    >
                        {name}
                    </Button>
            </NextLink>
        )
    }

    return (
        <StickyNav
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            maxWidth="800px"
            minWidth="356px"
            as="nav"
            bg={bg}
            px={6}
            py={2}
            mt={[null, 0, 8]}
            mb={[null, 0, 8]}
            mx="auto"
            display={['none', 'flex', 'flex']}
        >
            <DarkModeSwitch />
            <Box>
                {rendered}
            </Box>
        </StickyNav>
    )
}

export default Navigation