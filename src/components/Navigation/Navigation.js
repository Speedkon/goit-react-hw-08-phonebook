import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Button} from '@chakra-ui/react'

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
        <Button colorScheme='teal' marginRight="20px">
            <NavLink to="/">
                Home
            </NavLink>
        </Button>
        {isLoggedIn && (
            <Button colorScheme='teal'>
                <NavLink to="/contacts">
                Contacts
                </NavLink>
            </Button>
        )}
        </nav>
    );
};