import React, { ReactElement } from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';
import { Props } from './types';

export default function UsernameField(props: Props): ReactElement {
    const { name, label } = props;
    const [field, meta] = useField(props);
    return (
        <TextField
            variant="outlined"
            margin="normal"
            id={name}
            label={label}
            error={meta.touched && !!meta.error}
            helperText={meta.touched && meta.error}
            autoComplete="email"
            fullWidth
            {...field}
        />
    );
}
