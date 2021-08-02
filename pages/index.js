import { Flex, Heading, Stack, useColorMode, Text } from "@chakra-ui/react"

export default function Home() {
    const { colorMode } = useColorMode()

    const textColors = {
        light: "gray.700",
        dark: "gray.400"
    }

    const linkColors = {
        light: "blue.400",
        dark: "blue.600"
    }

    return (
        <Stack as="main" spacing={8} justifyContent="center" m="0 auto 4rem auto" alignItems="flex-start" maxWidth="750px" px={4}>
            <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="750px">
                <Heading mb={4} as="h1" size="xl">
                    Hello, I'm meizuFlux, a developer, gamer, and student learning to program
                </Heading>
                <Text color={textColors[colorMode]}>
                    This website is where I showcase projects, my blog, and experiment with new technologies
                </Text>
            </Flex>
        </Stack>
    )
}
