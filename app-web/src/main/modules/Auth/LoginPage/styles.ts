import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        fullWidth: {
            width: '100%',
        },
        alert: {
            margin: theme.spacing(1, 0, 1, 0),
        },
    })
);
