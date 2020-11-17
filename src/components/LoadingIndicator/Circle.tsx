import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    circle: (props) => ({
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        transform: `rotate(${props.rotate}deg)`,
        '&::before': {
            content: '""',
            display: 'block',
            margin: '0 auto',
            width: '15%',
            height: '15%',
            backgroundColor: '#999',
            borderRadius: '100%',
            animation: `$circle-fade-delay 1.2s infinite ease-in-out both`,
            animationDelay: `${props.delay}s`,
        },
    }),
    '@keyframes circle-fade-delay': {
        '0%': {
            opacity: 0,
        },
        '39%': {
            opacity: 0,
        },
        '100%': {
            opacity: 0,
        },
        '40%': {
            opacity: 1,
        },
    },
});

interface IProps {
    rotate?: number;
    delay?: number;
}

export const Circle: React.FC<IProps> = (props) => {
    const classes = useStyles(props);
    return <div className={classes.circle} />;
};

export default Circle;
