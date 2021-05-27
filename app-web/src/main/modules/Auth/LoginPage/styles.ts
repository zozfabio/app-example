import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2, 0, 5, 0),
        },
        toolbarLeftSpace: {
            flexGrow: 1,
        },
        fullWidth: {
            width: '100%',
        },
        alert: {
            margin: theme.spacing(1, 0, 1, 0),
        },
    })
);
