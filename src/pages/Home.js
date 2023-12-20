import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from 'hooks';

export default function Home() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const { user } = useAuth();
    
    return isLoggedIn ? (
        
            <div>
            <h1>Hello {user.name}!</h1>
                <button variant='link'><Link to="/contacts">To my contacts</Link></button>
            </div>
            
    ) : (
        <div>
            <h1>Wellcome to Phonebook!</h1>
        </div>
    );
}