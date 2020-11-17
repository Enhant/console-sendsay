import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'components/Container';

export default class NotFound extends React.PureComponent {
    render() {
        return (
            <Container>
                <br />
                <h1>404</h1>
                <h3>Location Unknown</h3>
                <p>Страница не существует</p>
                <p>
                    Вы можете вернутся к приложению{' '}
                    <NavLink exact to="/">
                        здесь
                    </NavLink>
                </p>
            </Container>
        );
    }
}
