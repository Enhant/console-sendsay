import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import Input from 'components/Input';
import Button from 'components/Button';

import { sendsay } from 'sendsay';

import { loginAction } from 'redux/actions';
import { Redirect, useHistory } from 'react-router-dom';

const useStyles = createUseStyles({
    form: {
        width: 520,
        height: 425,
        background: '#fff',
        padding: '40px 30px',
        boxSizing: 'border-box',
        margin: '200px auto'
    },
    label: {
        fontWeight: 400,
        fontSize: 24,
        lineHeight: '30px',
        color: '#0D0D0',
        letterSpacing: 0,
        fontFamily: 'SF Pro Text',
    },
});

const Form = () => {
    const [login, setLogin] = useState('bloodmansport@gmail.com');
    const [loginError, setLoginError] = useState(false);

    const [subLogin, setSubLogin] = useState('');
    const [subLoginError, setSubLoginError] = useState(false);
    
    const [password, setPassword] = useState('oohaa8Beg');
    const [passwordError, setPasswordError] = useState(false);

    const classes = useStyles();

    const handleChangeLogin = (e: ChangeEvent) => {
        setLogin((e.target as HTMLInputElement).value);
    };

    const handleChangesubLogin = (e: ChangeEvent) => {
        setSubLogin((e.target as HTMLInputElement).value);
    };

    const handleChangePassword = (e: ChangeEvent) => {
        setPassword((e.target as HTMLInputElement).value);
    };

    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmitForm = () => {
        const clearValidateStatusInput = () => {
            setLoginError(false);
            setSubLoginError(false);
            setPasswordError(false);
        }

        const validateInputs = () => {
            const emailRegExp = /(?:[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            const nameRegExp = /(?:[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")/;
            const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z])(?=.*[a-zA-Z]).{8,}$/;
            setLoginError(emailRegExp.test(login) && nameRegExp.test(login));
            setSubLoginError(!nameRegExp.test(subLogin));
            setPasswordError(!passwordRegExp.test(password));
        }

        clearValidateStatusInput();
        
        interface IRes {
            duration: number
            list:{
                "about.id" : string
            }
            "request.id": string
            _ehid: string
        }

        sendsay.login({
            login,
            subLogin,
            password,
        }).then(() => {
            dispatch( loginAction({ login, subLogin, password }));
            history.push('/console')
        }).catch( (err : any) => console.log(err) );
    };

    return (
        <div className={classes.form}>
            <div className={classes.label}>API-консолька</div>
            <Input 
                label="Логин" 
                value={login} 
                onChange={handleChangeLogin} 
                error={loginError}
            />
            <Input 
                label="Сублогин" 
                value={subLogin} 
                onChange={handleChangesubLogin} 
                error={subLoginError} 
            />
            <Input 
                label="Пароль" 
                value={password} 
                onChange={handleChangePassword} 
                type="password" 
                error={passwordError}
            />
            <Button label="Войти" onClick={handleSubmitForm} />
        </div>
    );
};

export default Form;
