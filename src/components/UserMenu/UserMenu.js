import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { Button} from '@chakra-ui/react'

export const UserMenu = () => {
    const dispatch = useDispatch();

    return (
        <div>
        <Button colorScheme='teal' type="button" onClick={() => dispatch(logOut())}>
            Logout
        </Button>
        </div>
    );
};