import { useColorMode, IconButton, Link, Flex, Text } from '@chakra-ui/react'
import { FiGithub, FiYoutube, FiMail } from "react-icons/fi"
import { FaDiscord } from "react-icons/fa"

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

    const test = [
        {name: "GitHub", url: "https://github.com/meizuflux", icon: <FiGithub />},
        {name: "Discord", url: "https://discord.com/users/809587169520910346", icon: <FaDiscord />},
        {name: "YouTube", url: "https://www.youtube.com/channel/UCymZdclkcHqM1SbCesRnkYg", icon: <FiYoutube />},
        {name: "Email", url: "mailto:hello@meizuflux.com", icon: <FiMail />}
    ]
    return (
        <Flex align="center" mb={4} direction="column" display={['none', 'flex', 'flex']}>
            <div>
                {test.map((social) => 
                    <Link href={social.url} title={social.name} isExternal key={social.name}>
                        <IconButton
                            aria-label={social.name}
                            icon={social.icon}
                            size="lg"
                            color={borderIcon[colorMode]}
                            variant="ghost"
                            _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                        />
                    </Link>
                )}
            </div>
        </Flex>
    )
}

export default Footer