import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    button: {
        display: 'block',
        background: `linear-gradient(180deg, #45A6FF 0%, #0055FB 100%),
        linear-gradient(0deg, #C4C4C4, #C4C4C4)`,
        borderRadius: 5,
        color: '#fff',
        fontSize: 16,
        fontWeight: 500,
        lineHeight: '30px',
        textAlign: 'center',
        padding: '5px 10px',
        width: 90,
        marginTop: 20,
        border: 'none',
        fontFamily: 'SF Pro Text',
        cursor: 'pointer',
        outline: 'none',
    },
});

interface IProps {
    type?: "button" | "submit" | "reset"
    onClick?: () => void
    label?: string
}

const Button : React.FC<IProps> = (props) => {
    const classes = useStyles();
    return (
        <button type={props.type} className={classes.button} onClick={props.onClick}>
            {props.label}
        </button>
    );
};

export default Button;