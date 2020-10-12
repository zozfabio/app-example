import React, { ReactElement } from 'react';
import { Form as HtmlForm, Formik } from 'formik';
import { Props } from './types';

export default function Form({ children, initialValues, validationSchema, onSubmit }: Props): ReactElement {
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <HtmlForm noValidate autoComplete="off">
                {children}
            </HtmlForm>
        </Formik>
    );
}
