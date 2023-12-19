import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from '../components/ContactList/ContactList';
import { selectIsLoading, selectContacts, selectError } from '../redux/selectors';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { getContacts } from '../redux/contacts/operations';
import { MutatingDots } from "react-loader-spinner";
import { Toaster } from "react-hot-toast";
import { Filter } from '../components/Filter/Filter';

export default function Contcts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const contacts = useSelector(selectContacts);
    const error = useSelector(selectError);
    
    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    return (
        <>
        <title>Phonebook</title>
        <ContactForm />
        <title>Contacts</title>
        {contacts.length > 0 ? <Filter/>
        : (!error && !isLoading && <p>You don't have any contacts</p>) }
        <ContactList />
        {isLoading && <MutatingDots 
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor= '#4fa94d'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />}
        <Toaster position="top-right"/>
        </>
    );
}