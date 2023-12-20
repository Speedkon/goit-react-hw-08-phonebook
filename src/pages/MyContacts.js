import { useSelector } from 'react-redux';
import { ContactList } from '../components/ContactList/ContactList';
import { selectIsLoading, selectContacts, selectError } from '../redux/selectors';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { MutatingDots } from "react-loader-spinner";
import { Toaster } from "react-hot-toast";
import { Filter } from '../components/Filter/Filter';
import { Heading } from '@chakra-ui/react'

export default function Contcts() {
    const isLoading = useSelector(selectIsLoading);
    const contacts = useSelector(selectContacts);
    const error = useSelector(selectError);

    return (
        <>
        <Heading fontSize='24px' color='teal'>Phonebook</Heading>
        <ContactForm />
        <Heading fontSize='24px' color='teal' >Contacts</Heading>
        {contacts.length > 0 ? <Filter/>
        : (!error && !isLoading && <p>You don't have any contacts</p>) }
        <ContactList />
        {isLoading && <MutatingDots 
            height="100"
            width="100"
            color="teal"
            secondaryColor= 'teal'
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