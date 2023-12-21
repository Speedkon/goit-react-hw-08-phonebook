import { Form, Formik} from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { selectContacts, selectIsLoading } from '../../redux/selectors';
import { addNewContact } from '../../redux/contacts/operations';
import { Box, FormLabel, Button } from '@chakra-ui/react'
import { Error, Input } from './ContactForm.styled';

const schema = Yup.object().shape({
    name: Yup.string().min(3, "Too short").required('Required'),
    number: Yup.string().matches(/^(\d{2,}-\d{2,}-\d{2,}|\d{2,}-\d{2,}|\d{5,})$/, "It must be min 5 numbers (1234567 or 123-45-67)").required('Required'),
});

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);

    const onAdd = newContact => {
        if (contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
            Report.warning(`${newContact.name} is already in contacts.`);
            return
        }
        dispatch(addNewContact(newContact));
    }
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            validationSchema={schema}
            onSubmit={(values, actions) => {
                onAdd(values);
                actions.resetForm();
            }}
        >

            <Box bg="white" p={8} rounded="md" w='300px'>
                <Form autoComplete="off">
                    <FormLabel marginRight="0" htmlFor="name">
                        Name
                            <Input type="text" name="name" id="name" placeholder="New contact"/>
                            <Error name="name" component="p"/>
                    </FormLabel>
                    <FormLabel marginRight="0" htmlFor="number">
                        Number
                            <Input type="tel" name="number" id="number" placeholder="Enter a number"/>
                            <Error name="number" component="p"/>
                    </FormLabel>
                    <Button colorScheme='teal' width="100%" marginTop="10px" type="submit" disabled={isLoading}>Add contact</Button>
                </Form>
            </Box>
        </Formik>
    )
}