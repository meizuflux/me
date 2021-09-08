import { Flex, Heading, Stack, useColorMode, Text, Divider, Link, Code } from "@chakra-ui/react"
import ProjectCard from "../components/ProjectCard"
import Todo from "../components/Todo"

export default function Home() {
    const { colorMode } = useColorMode()

    const textColors = {
        light: "gray.700",
        dark: "gray.400"
    }

    const linkColor = {
        light: 'blue.400',
        dark: 'blue.600'
      }

    return (
        <Stack as="main" spacing={8} justifyContent="center" m="0 auto 4rem auto" alignItems="flex-start" maxWidth="750px" px={4}>
            <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="750px">
                <Heading mb={4} as="h1" size="xl">
                    Hello, I'm meizuFlux
                </Heading>
                <Text>
                    This website is where I showcase projects, my blog, and experiment with new technologies. It's a major work in progress so don't be surprised when crap is broken.
                </Text>

                <Divider mb="1.25rem" mt="1.25rem" alignSelf="center" />

                <Heading letterSpacing="tight" size="lg" fontWeight="700" as="h2">
                    Projects
                </Heading>
                <ProjectCard title="Personal Website" href="https://github.com/meizuflux/me" path="/images/crunch.png" alt="cinnamon toast crunch">
                    My personal portfolio website that you are reading this on. I created this with <Code>NextJS</Code> and <Code>Chakra UI</Code>.
                </ProjectCard>

                <ProjectCard title="mzf.one" href="https://github.com/meizuflux/mzf.one" path="/images/mzf.one.png" alt="mzf.one logo">
                    A URL Shortner that I designed myself with <Code>SolidJS</Code> as the frontend, <Code>Bootstrap 5</Code> for styling, and a Python <Code>Starlette</Code> backend. It's served on my VPS with <Code>nginx</Code> as a proxy.
                </ProjectCard>

                <Divider mb="1.25rem" mt="1.25rem" alignSelf="center" />

                <Todo />
            </Flex>
        </Stack>
    )
}
