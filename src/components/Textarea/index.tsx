import React, {useState} from 'react';
// использовать module-css
import styles from './styles.css';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    textArea: ({error}) => ({
        width: 400,
        height: 400,
        outline: error ? `1px solid red` : '',
    })
})

interface IProps {
    onChange?: (e : any) => void
    disabled?: boolean
    value?: string
    error?: boolean
}

const TextArea: React.FC<IProps> = (props) => {
    const classes = useStyles({ error: props.error });

    if (props.value) {
        return (
            <textarea
                onChange={props.onChange}
                className={classes.textArea}
                disabled={props.disabled}
                value={props.value}
            />
        )
    }

    return (
        <textarea
            onChange={props.onChange}
            className={classes.textArea}
        />
    )
};

export default TextArea;