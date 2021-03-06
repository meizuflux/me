import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Flex, Box, Button, HStack } from '@chakra-ui/react'
import styled from '@emotion/styled'


const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  transition: height .5s, line-height .5s;
`

const NavButton = ({router, link}) => {
    const current = router.pathname == link.href

    return (
        <NextLink href={link.href}>
                <Button
                    variant={current ? "ghost" : null}
                    p={[1, 3, 4]}
                    _hover={{ backgroundColor: "gray.700" }}
                    backgroundColor={current ? "gray.700" : null }
                >
                    {link.caption}
                </Button>
        </NextLink>
    )
}

const Navigation = () => {
    const router = useRouter()

    const links = [
        {"caption": "Blog", "href": "/blog"},
        {"caption": "Projects", "href": "/projects"},
    ]


    return (
        <Box
            position="sticky"
            zIndex="10"
            top="0"
            width="100%"
            as="nav"
        >
            <Flex
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="750px"
                minWidth="0px"
                as="div"
                px={4}
                py={2}
                m="0 auto 4rem auto"
                mb={[null, 0, 8]}
                mx="auto"
                display={['none', 'flex', 'flex']}
            >
                <NavButton router={router} link={{"caption": "Home", "href": "/"}}/>
                <HStack spacing={3}>
                    {links.map((link) => (
                        <NavButton router={router} link={link} key={link.caption} />
                    ))}
                </HStack>
            </Flex>
            
        </Box>
    )
}

export default Navigation