import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        margin: '2em auto',
        width: '40px',
        height: '40px',
        position: 'relative',
    },
});

interface IProps {
    children: React.ReactNode;
}

const Wrapper: React.FC<IProps> = (props) => {
    const classes = useStyles();
    return <div className={classes.wrapper}>{props.children}</div>;
};

export default Wrapper;
