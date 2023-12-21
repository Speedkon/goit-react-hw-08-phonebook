import styled from "styled-components";
import { Field, ErrorMessage } from "formik";

export const Input = styled(Field)`
    display: block;
    width: 100%;
    margin: 8px 0;
    padding: 16px;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid #dcdcdc;
    height: 32px;
`;

export const Error = styled(ErrorMessage)`
    font-size: 16px;
    color: #c7231b;
`;

