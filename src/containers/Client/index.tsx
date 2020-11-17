import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from 'components/NotFoundPage';
import Container from 'components/Container';

export function Client() {
    return (
        <Container>
            <Switch>
                <Route component={NotFoundPage} />
            </Switch>
        </Container>
    );
}

export default Client;
