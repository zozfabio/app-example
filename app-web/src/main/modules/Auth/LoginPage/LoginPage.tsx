import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { LockOutlined } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import clsx from 'clsx';
import { FormikValues } from 'formik';
import React, { ReactElement } from 'react';
import Form, { Validations } from '../../../components/Form';
import PasswordField from '../../../components/PasswordField';
import UsernameField from '../../../components/UsernameField';
import { LoginInput } from '../../../services/auth/types';
import { useAuthContext } from '../Provider/hooks';
import useStyles from './styles';

const values: LoginInput = {
    username: 'user@mail.com',
    password: 'userpass',
};

const validation = Validations.object({
    username: Validations.string().max(20, 'Must be 20 characters or less').required('Required'),
    password: Validations.string().max(20, 'Must be 20 characters or less').required('Required'),
});

export default function LoginPage(): ReactElement {
    const classes = useStyles();
    const { login, error } = useAuthContext();
    const onSubmit = (input: FormikValues) => login(input as LoginInput);
    return (
        <main className={classes.paper}>
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
                        <Toolbar disableGutters={true}>
                            <span className={classes.toolbarLeftSpace} />
                            <Button variant="contained" color="primary" type="submit">
                                Login
                            </Button>
                        </Toolbar>
                    </Grid>
                </Grid>
            </Form>
        </main>
    );
}
