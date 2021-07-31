import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Flex, useColorMode, Box, Button } from '@chakra-ui/react'
import styled from '@emotion/styled'

import DarkModeSwitch from '../components/DarkModeSwitch'

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: height .5s, line-height .5s;
`

const Navigation = () => {
    const { colorMode } = useColorMode()
    const router = useRouter()

    const colors = {
        light: '#fff',
        dark: '#15161a'
    }

    const hoverBg = {
        light: 'gray.100',
        dark: 'gray.700',
    }

    const links = [
        ["Home", "/", 1],
        ["Blog", "/blog", 2],
        ["Projects", "/projects", 3]
    ]

    const rendered = []
    for (let [name, href, index] of links) {
        rendered.push(
            <NextLink href={href} passHref>
                    <Button
                        key={index}
                        as="a"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{ backgroundColor: hoverBg[colorMode] }}
                        backgroundColor={hoverBg[colorMode]}
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
            width="100%"
            bg={colors[colorMode]}
            as="nav"
            px={6}
            py={2}
            mt={8}
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