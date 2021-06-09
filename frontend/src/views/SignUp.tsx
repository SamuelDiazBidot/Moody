import React, { useState } from 'react'
import { Link as ReactLink } from "react-router-dom" 
import { useForm } from "react-hook-form"
import { ViewIcon } from "@chakra-ui/icons"
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputRightElement,
  InputGroup,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
  IconButton,
} from '@chakra-ui/react'

type SignUpForm = {
    username: string
    email: string
    password: string
    confirm_password: string
}

export const SignUp = () => {
    const [show, setShow] = useState(false)
    const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm<SignUpForm>()

    const onSubmit = handleSubmit( data => {
        console.log(data)
    })

    const handleShowPassword = () => {
        setShow(!show)
    }

    return (
        <Flex
        minH={"100vh"}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Heading>
                    Sign Up
            </Heading>
            <Box
            minW="375"
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
                <form onSubmit={onSubmit}>
                    <Stack spacing={4}>
                        <FormControl id="username" isInvalid={errors.username ? true : false} isRequired>
                            <FormLabel>Username</FormLabel>
                            <Input
                                { ...register("username", {
                                    required: "Username is missing",
                                    minLength: { value: 4, message: "Minimum length should be 4" }
                                })}
                            />
                            <FormErrorMessage>
                                { errors.username && errors.username.message } 
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl id="email" isInvalid={errors.email ? true : false} isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type={"email"}
                                { ...register("email", {
                                    required: "Email is missing"
                                })}
                            />
                            <FormErrorMessage>
                                { errors.password && errors.password.message }
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl id="password" isInvalid={errors.password ? true : false} isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input 
                                    type={show ? "text" : "password"} 
                                    { ...register("password", {
                                        required: "password is missing",
                                        minLength: { value: 5, message: "password must have at least 5 characters" }
                                    })}
                                />
                                <InputRightElement >
                                    <IconButton 
                                        aria-label="show password" 
                                        variant="ghost" 
                                        onClick={handleShowPassword}
                                        icon={<ViewIcon/>}
                                    />
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>
                                { errors.password && errors.password.message }
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl id="confirm_password" isInvalid={errors.confirm_password ? true : false} isRequired>
                            <FormLabel>Confirm Password</FormLabel>
                            <InputGroup>
                                <Input 
                                    type={show ? "text" : "password"} 
                                    { ...register("confirm_password", {
                                        required: "passwords do not match",
                                        validate: value => value === watch('password') || "passwords do not match"
                                    })}
                                />
                                <InputRightElement >
                                    <IconButton 
                                        aria-label="show password" 
                                        variant="ghost" 
                                        onClick={handleShowPassword}
                                        icon={<ViewIcon/>}
                                    />
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>
                                { errors.confirm_password && errors.confirm_password.message }
                            </FormErrorMessage>
                        </FormControl>
                        
                        <Button
                            type="submit"
                            isLoading={isSubmitting}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                            bg: 'blue.500',
                            }}>
                            Sign in
                        </Button>
                    </Stack>
                </form>
                <Center>
                    <Text fontSize="sm" color="gray.500">
                        Already have an account? Click <Link as={ReactLink} to="/signin" color="blue.400">here</Link> to Sign In
                    </Text>
                </Center>
            </Stack>
            </Box>
        </Stack>
        </Flex>
    )
}
