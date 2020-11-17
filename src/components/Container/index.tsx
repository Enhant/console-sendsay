import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    root: {
        boxSizing: 'border-box',
        padding: '30px 50px',
        width: '100%',
        '@media (max-width: 600px)': {
            padding: '10px 30px',
        },
        '@media (max-width: 960px)': {
            padding: '10px 20px',
        },
    },
});

interface IProps {
    children: React.ReactNode;
}

const Container: React.FC<IProps> = (props) => {
    const classes = useStyles();
    return <div className={`${classes.root}`}>{props.children}</div>;
};

export default Container;
