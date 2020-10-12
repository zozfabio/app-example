import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        offset: theme.mixins.toolbar,
        appBar: {
            background: theme.palette.common.white,
            color: theme.palette.common.black,
        },
    })
);
