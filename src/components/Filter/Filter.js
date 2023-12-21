import { updateFilter } from '../../redux/filterSlice';
import { useDispatch } from "react-redux";
import { Input} from "./Filter.styled"
import { FormLabel } from '@chakra-ui/react'

export const Filter = () => {
    const dispatch = useDispatch();
    return (
        <FormLabel w='300px'>
            Find contacts by name
            <Input type="text" name="filter" placeholder="Search" onChange={e => dispatch(updateFilter(e.target.value))} />
        </FormLabel>
    )
}