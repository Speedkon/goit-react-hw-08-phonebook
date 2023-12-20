import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from 'hooks';
import { Button } from "@chakra-ui/react";
import { Heading } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'

export default function Home() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const { user } = useAuth();
    
    return isLoggedIn ? (
                <Flex direction="column" align="center">
                <Heading>Hello {user.name}!</Heading>
                    <Button variant='link' colorScheme='teal'><Link to="/contacts">To my contacts</Link></Button>
                </Flex>
            
    ) : (
        <Flex justify="center">
            <Heading>Wellcome to Phonebook!</Heading>
        </Flex>
    );
}