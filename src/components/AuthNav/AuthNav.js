import { NavLink } from 'react-router-dom';
import { Button} from '@chakra-ui/react'

export const AuthNav = () => {
    return (
        <div>
        <Button colorScheme='teal' marginRight="20px">
            <NavLink to="/register">
                Registration
            </NavLink>
        </Button>
        <Button colorScheme='teal'>
            <NavLink to="/login">
                Log In
            </NavLink>
        </Button>
        </div>
    );
};