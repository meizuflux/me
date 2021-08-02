import React from 'react'
import { useColorMode, IconButton, Link, Flex } from '@chakra-ui/react'
import { FiGithub } from "react-icons/fi"

const Footer = () => {
    const { colorMode } = useColorMode()
    const borderIcon = {
        light: 'gray.400',
        dark: 'gray.500'
    }
    const footerHoverBg = {
        light: 'gray.100',
        dark: 'gray.700',
    }

    const socials = [
        ["GitHub", "https://github.com/ppotatoo", <FiGithub />, 1]
    ]
    const rendered = []
    for (let [name, href, icon, index] of socials) {
        rendered.push(
            <Link href={href} title={name} isExternal key={index}>
                <IconButton
                    key={index}
                    aria-label={name}
                    icon={icon}
                    size="lg"
                    color={borderIcon[colorMode]}
                    variant="ghost"
                    _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                />
            </Link>
        )
    }
    return (
        <Flex align="center" mb={4} direction="column" display={['none', 'flex', 'flex']}>
            <div>
                {rendered}
            </div>
        </Flex>
    )
}

export default Footer