import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
    createStyles({
        hide: {
            display: 'none',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
    })
);
