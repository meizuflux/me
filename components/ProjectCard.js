import { ExternalLinkIcon } from "@chakra-ui/icons"
import { FiGithub } from "react-icons/fi"
import { HStack, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react"

const ProjectCard = ({ title, href, source, children, path, alt}) => {
    return (
        <Flex w="100%" title={title} _hover={{boxShadow: "0px 8px 26px rgba(0, 0, 0, 0.9)"}} mt="1rem">
            <Flex align="center" border="0.5px solid" borderRadius={4} p={4}>
                <Image src={path} alt={alt} width={["60px", "70px", "100px"]} ml={2} mr={4} />
                <Stack w="100%">
                    <Flex justify="space-between">
                        <Heading as="h3" size="md" fontWeight="700" mb="0.25">
                            {title}
                        </Heading>

                        <HStack>
                            <Link href={source}>
                                <FiGithub size="20"/>
                            </Link>
                            
                            <Link href={href}>
                                <ExternalLinkIcon fontSize="2xl" />
                            </Link>
                            
                        </HStack>
                            
                    </Flex>
                    <Text>{children}</Text>
                </Stack>
            </Flex>
        </Flex>
    )
}

export default ProjectCard