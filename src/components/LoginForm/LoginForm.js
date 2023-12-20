import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Box, Input, FormLabel, Button, Heading, Center } from '@chakra-ui/react'

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
        logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
        })
        );
        form.reset();
    };

    return (
        <Box bg="white" p={8} rounded="md" w='300px'>
            <form onSubmit={handleSubmit} autoComplete="off">
                <Center marginBottom="10px">
                    <Heading size='lg'>Welcome back</Heading>
                </Center>
            <FormLabel marginRight="0">
                Email
                <Input variant='outline' width="100%" type="email" name="email" />
            </FormLabel>
            <FormLabel marginRight="0">
                Password
                <Input variant='outline' type="password" name="password" />
            </FormLabel>
            <Button colorScheme='teal' width="100%" marginTop="10px" type="submit">Log In</Button>
            </form>
        </Box>
    );
};