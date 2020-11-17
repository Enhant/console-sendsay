import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from 'containers/LoginForm';
import injectSheet from 'react-jss';
import Container from 'components/Container';
import PrivateRoute from 'components/PrivateRoute';
import Console from 'containers/Console';

const style = {
    '@global': {
        html: {
            height: '100%',
            width: '100%',
            fontFamily: 'sans-serif',
            lineHeight: 1.15,
        },
        body: {
            height: '100%',
            width: '100%',
            margin: 0,
            fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
            color: '#212529',
            textAlign: 'left',
            background: '#E5E5E5'
        },
    },
};
// Использовать css-module
const App = () => (
    <Container>
        <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/console" component={Console} />
        </Switch>
    </Container>
);

export default injectSheet(style)(App);
