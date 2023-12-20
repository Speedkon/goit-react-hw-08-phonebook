import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Flex} from '@chakra-ui/react'

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header>
        <Flex justify="space-between" paddingTop="10px" paddingBottom="20px">
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
        </header>
    );
};
