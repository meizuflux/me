import { Flex, Heading, Stack, Text, Divider, Code } from "@chakra-ui/react"
import ProjectCard from "../components/ProjectCard"
import Todo from "../components/Todo"

export default function Home() {

    return (
        <Stack as="main" spacing={8} justifyContent="center" m="0 auto 4rem auto" alignItems="flex-start" maxWidth="750px" px={4}>
            <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="750px">
                <Heading mb={4} as="h1" size="xl">
                    Hello, I'm meizuflux
                </Heading>
                <Text>
                    I'm a developer who builds bots and sometimes designs websites. My primary skill is in writing Python, but I dabble in a bit of JS from time to time.
                </Text>

                <Divider mb="1.25rem" mt="1.25rem" alignSelf="center" />

                <Heading letterSpacing="tight" size="lg" fontWeight="700" as="h2" mb={4}>
                    Featured Projects
                </Heading>
                <Text>
                    Projects that I am particularly proud of or that I feel are written well
                </Text>


                <ProjectCard title="Personal Website" href="https://meizuflux.com" source="https://github.com/meizuflux/me" path="/favicon.ico" alt="cinnamon toast crunch">
                    My personal portfolio website that you are reading this on. I created this with <Code>NextJS</Code> and <Code>Chakra UI</Code>.
                    This was the first website that I ever truly "deployed". It's deployed on <Code>Cloudflare Pages</Code>.
                </ProjectCard>

                <ProjectCard title="mzf.one" href="https://mzf.one" source="https://github.com/meizuflux/mzf.one" path="/images/mzf.one.png" alt="mzf.one logo">
                    A URL Shortner that I designed myself with <Code>SolidJS</Code> as the frontend, <Code>Bootstrap 5</Code> for styling, and a Python <Code>Starlette</Code> backend.
                    It's served on my VPS with <Code>nginx</Code> as a proxy.
                    I learned a lot from this about how to deploy a website from a server.
                </ProjectCard>

                <Divider mb="1.25rem" mt="1.25rem" alignSelf="center" />

                <Todo />
            </Flex>
        </Stack>
    )
}
