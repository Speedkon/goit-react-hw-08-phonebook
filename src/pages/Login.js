import { LoginForm } from "../components/LoginForm/LoginForm";
import { Box } from '@chakra-ui/react'

export default function Login() {
    return (
        <Box display='flex' justifyContent="center">
        <LoginForm />
        </Box>
    );
}