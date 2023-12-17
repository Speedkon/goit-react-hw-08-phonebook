import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from '../components/ContactList/ContactList';
import { fetchTasks } from 'redux/tasks/operations';
import { selectLoading } from 'redux/tasks/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';

export default function Tasks() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <>
        <title>Your tasks</title>
        <ContactForm />
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactList />
        </>
    );
}