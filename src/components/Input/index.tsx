import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    label: {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '20px',
        color: '#0D0D0',
        marginTop: 20,
        fontFamily: 'SF Pro Text',
    },
    input: ({error}) => ({
        width: '100%',
        height: 40,
        border: error ? `1px solid #CF2C00` : `1px solid rgba(0, 0, 0, 0.2)`,
        borderRadius: 5,
        boxSizing: 'border-box',
        fontSize: 18,
        lineHeight: '30px',
        outline: 'none',
        marginTop: 5,
    }),
});

interface IProps {
    label: string
    value: string
    type?: string
    onChange: (e: React.ChangeEvent) => void,
    error: boolean
}

const Input : React.FC<IProps> = (props) => {
    const classes = useStyles({ error: props.error });

    return (
        <label>
            <div className={classes.label}>{props.label}</div>
            <input
                value={props.value}
                type={props.type}
                onChange={props.onChange}
                className={classes.input}
            />
        </label>
    );
};

export default Input;
