import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Loading from '../LoadingIndicator';
import {IState} from 'types';
import { sendsay } from 'sendsay';

interface IProps {
    exact?: boolean
    strict?: boolean
    path: string;
    component: () => JSX.Element
}

const PrivateRoute: React.FC<IProps> = (props) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isError, setIsError ] = useState(false);
    const loginData = useSelector( ( state : { console: IState } ) => ({
        login: state.console.login,
        subLogin: state.console.subLogin,
        password: state.console.password,
    }));

    useEffect( () => {
        sendsay.login(loginData)
        .then( () => {
            setIsLoading(false);
        } )
        .catch( () => {
            setIsError(true);
        } )
    }, [loginData] )

    if (isError) {
        return <Redirect to="/"/>
    }

    if (isLoading) {
        return <Loading/>
    }

    return (
        <Route
            exact={props.exact}
            strict={props.strict}
            path={props.path}
            component={props.component}
        />
    )
};

export default PrivateRoute;
