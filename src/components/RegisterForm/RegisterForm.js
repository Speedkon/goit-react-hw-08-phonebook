import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Box , Input, FormLabel, Button, Heading, Center } from '@chakra-ui/react'

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
        register({
            name: form.elements.name.value,
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
                    <Heading size='lg'>Create account</Heading>
                </Center>
                <FormLabel marginRight="0">
                    Username
                    <Input variant='outline' type="text" name="name" />
                </FormLabel>
                <FormLabel marginRight="0">
                    Email
                    <Input variant='outline' type="email" name="email" />
                </FormLabel>
                <FormLabel marginRight="0">
                    Password
                    <Input variant='outline' type="password" name="password" />
                </FormLabel>
                <Button colorScheme='teal' width="100%" marginTop="10px" type="submit">Registration</Button>
                </form>
            </Box>
    );
};