import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box } from '@chakra-ui/react'

export default function Register() {
    return (
        <Box display='flex' justifyContent="center">
        <title>Registration</title>
        <RegisterForm />
        </Box>
    );
}
