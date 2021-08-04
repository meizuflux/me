import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Flex, Heading, Image, Link, Stack, Text, useColorMode } from "@chakra-ui/react"

const ProjectCard = ({ title, href, children, path, alt}) => {
    const { colorMode } = useColorMode()
    const boxShadowColor = {
        light: '0px 8px 26px rgba(0, 0, 0, 0.1)',
        dark: '0px 8px 26px rgba(0, 0, 0, 0.9)'
    }

    return (
        <Link href={href}  w="100%" title={title} isExternal _hover={{boxShadow: boxShadowColor[colorMode]}} mt="1rem">
            <Flex align="center" border="0.5px solid" borderRadius={4} p={4}>
                <Image src={path} alt={alt} width={["40px", "50px", "60px", "70px"]} ml={2} mr={4} />
                <Stack w="100%">
                    <Flex justify="space-between">
                        <Heading as="h3" size="md" fontWeight="700" mb="0.25">
                            {title}
                        </Heading>
                        <ExternalLinkIcon fontSize="2xl" />
                    </Flex>
                    <Text>{children}</Text>
                </Stack>
            </Flex>
        </Link>
    )
}

export default ProjectCard