import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { FormikValues } from 'formik';
import Form, { Validations } from '../../../components/Form';
import UsernameField from '../../../components/UsernameField';
import PasswordField from '../../../components/PasswordField';
import { LoginInput } from '../../../services/auth/types';
import { Props } from './types';
import useStyles from './styles';

const values: LoginInput = {
    username: 'user@mail.com',
    password: 'userpass',
};

const validation = Validations.object({
    username: Validations.string().max(20, 'Must be 20 characters or less').required('Required'),
    password: Validations.string().max(20, 'Must be 20 characters or less').required('Required'),
});

export default function LoginPage({ login, error }: Props): ReactElement {
    const classes = useStyles();
    const onSubmit = (input: FormikValues) => login(input as LoginInput);
    return (
        <Form initialValues={values} validationSchema={validation} onSubmit={onSubmit}>
            <Grid container direction="column" justify="center" alignItems="center">
                <Avatar>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
                    {error && (
                        <Alert severity="error" className={clsx(classes.alert, classes.fullWidth)}>
                            {error.message}
                        </Alert>
                    )}
                    <UsernameField name="username" label="E-Mail" />
                    <PasswordField name="password" label="Password" />
                    <Button variant="contained" color="primary" type="submit">
                        Login
                    </Button>
                </Grid>
            </Grid>
        </Form>
    );
}
