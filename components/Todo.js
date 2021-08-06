import { DeleteIcon } from "@chakra-ui/icons"
import { useToast, Stack, Heading, Text, Input, Button, OrderedList, ListItem, Flex, IconButton, Divider, Box, FormControl, FormLabel, HStack, InputGroup, useEditableControls, EditablePreview, EditableInput, Badge } from "@chakra-ui/react"
import { nanoid } from "nanoid"
import { useState } from "react"

const Todo = () => {
    const toast = useToast()

    const [todos, setTodos] = useState([
        {id: 1, text: "Learn web dev"},
        {id: 2, text: "Improve meizuflux.com"}
    ])

    const [todo, setTodo] = useState('')

    const removeTodo = todo => {
        setTodos(todos.filter(t => t.id !== todo.id))
    }

    function submitTodo(e) {
        e.preventDefault()

        if (todo == "") {
            toast({
                title: "Todos must not be empty",
                description: "Make sure to provide todo text.",
                status: "error",
                duration: 600 * 5,
                isClosable: true
            })
        }
        else {
            setTodos([...todos, {id: nanoid(), text: todo}])
            setTodo("")
        }
    }

    return (
        <Stack spacing="0.5rem" w="100%">
            <Heading letterSpacing="tight" mt="1rem" size="lg" as="h2">
                To-Do List
            </Heading>
            <Text>Here are some things on my To-Do List</Text>
            
            <Divider mt="4523452345rem" mb="10px" alignSelf="center" />

            {
                (() => {
                    if (!todos.length) {
                        return <Badge p="4" m="5" borderRadius="4" textAlign="center">NO TODO ITEMS. ADD ONE BELOW.</Badge>
                    }
                    return (
                        <Box mb={3}>
                            <OrderedList spacing={1.5}>
                                {todos.map((todo, index) =>
                                    <ListItem key={index}>
                                        <Flex justify="space-between" align="center">
                                            {todo.text}
                                            <IconButton size="sm" mt="0px" mb="0px" aria-label="Delete todo item" icon={<DeleteIcon color="red.500" />} onClick={() => removeTodo(todo)} />
                                        </Flex>
                                    </ListItem>
                                )}
                            </OrderedList>
                        </Box>
                    )
                })()
            }

            <form onSubmit={submitTodo}>
                <HStack spacing={1}>
                    <Input type="text" placeholder="Enter your To-Do item..." value={todo} onChange={e => setTodo(e.target.value)} onSubmit={submitTodo}/>
                    <Button onClick={submitTodo} variant="outline">Add Item</Button>     
                </HStack>
            </form>
        </Stack>
    )
}

export default Todo