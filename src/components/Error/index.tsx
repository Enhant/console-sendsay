import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    root: {
        color: 'red',
        fontSize: 15,
        textAlign: 'center',
    },
});

const Error = () => {
    const classes = useStyles();
    return <div className={classes.root}>Ошибка</div>;
};

export default Error;
