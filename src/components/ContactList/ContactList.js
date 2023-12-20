import { selectContacts, selectError, selectFilter, selectVisibleContacts } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts, getContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import toast from 'react-hot-toast';
import { Box, Text, WrapItem, Button, Wrap } from '@chakra-ui/react'

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const visible = useSelector(selectVisibleContacts);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);


    const getVisibleContacts = () => {
    if (filter === "") {
        return contacts;
    }
    return visible;
    };

    const visibleContacts = getVisibleContacts();

    const onDelete = async (id) => {
            await dispatch(deleteContacts(id));
            error && toast.error('Error deleting contact.');
    }

    return (
        <Box w='400px'>
            {visibleContacts.map(contact => {
                const {id, name, number} = contact;

                    return (
                        <Wrap key={id} marginBottom="4px" justify="space-between">
                            <WrapItem alignItems="center" >
                                <Text marginRight="10px">{name}:</Text>
                                <Text>{number}</Text>
                            </WrapItem>
                            <Button colorScheme='teal' size='sm' type='button' onClick={() => onDelete(id)}>Delete</Button>
                        </Wrap>
                    )
                })}
        </Box>
    )
};