import React, { ReactElement } from 'react';
import logo from '../../../assets/logo.svg';
import useStyles from './styles';

export default function ReactApp(): ReactElement {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <div className={classes.content}>
                <img src={logo} className={classes.logo} alt="logo" />
                <p>
                    Edit <code>src/main/components/miscellaneous/ReactApp/index.tsx</code> and save to reload.
                </p>
                <p>{process.env.NODE_ENV}</p>
                <a className={classes.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </div>
        </div>
    );
}
