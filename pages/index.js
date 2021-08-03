import { Flex, Heading, Stack, useColorMode, Text, Divider } from "@chakra-ui/react"
import ProjectCard from "../components/ProjectCard"
import { CgWebsite } from "react-icons/cg"
import Todo from "../components/Todo"

export default function Home() {
    const { colorMode } = useColorMode()

    const textColors = {
        light: "gray.700",
        dark: "gray.400"
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

                <Divider mb="1.25rem" mt="1rem" alignSelf="center" />

                <Heading letterSpacing="tight" size="lg" fontWeight="700" as="h2">
                    Projects
                </Heading>
                <ProjectCard title="Personal Website" href="/" path="/images/crunch.png" alt="Potato yeahhhh">
                    The website you are looking at right now. I'm using it as a portfolio but also as a way to learn React/NextJS.
                </ProjectCard>

                <Divider mb="1.25rem" mt="1rem" alignSelf="center" />

                <Todo />
            </Flex>
        </Stack>
    )
}
