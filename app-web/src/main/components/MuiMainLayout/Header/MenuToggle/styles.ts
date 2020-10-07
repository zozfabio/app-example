import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
