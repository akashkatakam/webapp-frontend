import React from 'react';

export class HeaderComponent extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
            <span className="navbar-brand mb-0 h1">Recipes</span>
            </nav>
        );
    }
}