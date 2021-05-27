import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
    createStyles({
        offset: theme.mixins.toolbar,
        appBar: {
            background: theme.palette.common.white,
            color: theme.palette.common.black,
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
        },
    })
);
