import { DeleteIcon } from "@chakra-ui/icons"
import { useToast, useColorMode, Stack, Heading, Text, Input, Button, OrderedList, ListItem, Flex, IconButton } from "@chakra-ui/react"
import { useState } from "react"

const Todo = () => {
    const toast = useToast()
    const { colorMode } = useColorMode()

    const [todos, setTodos] = useState([
        "Learn web dev",
        "Actually finish a project"
    ])

    const [todo, setTodo] = useState('')

    const removeTodo = todo => {
        setTodos(todos.filter(t => t !== todo))
    }

    function submitTodo(e) {
        e.preventDefault()

        if (todo == "") {
            toast({
                title: "Todos must not be empty",
                description: "Make sure to provide todo text.",
                status: "warning",
                duration: 600 * 5,
                isClosable: true
            })
        }
        else {
            setTodos([...todos, todo])
            setTodo("")
        }
    }

    return (
        <Stack spacing={4} w="100%">
            <Heading letterSpacing="tight" mt={8} size="lg" as="h2">
                Todo List
            </Heading>
            <Text>Here are some things on my Todo List</Text>

            <div>
                <OrderedList spacing={3}>
                    {todos.map((todo, index) =>
                        <ListItem key={index}>
                            <Flex justify="space-between" align="center">
                                {todo}
                                <IconButton aria-label="Delete todo item" icon={<DeleteIcon color="red.400" />} onClick={() => removeTodo(todo)} />
                            </Flex>
                        </ListItem>
                    )}
                </OrderedList>
            </div>

            <Input variant="outline" type="text" mt={5} placeholder="Enter your todo..." value={todo} onChange={e => setTodo(e.target.value)} />
            <Button onClick={submitTodo}>Add Todo</Button>
        </Stack>
    )
}

export default Todo