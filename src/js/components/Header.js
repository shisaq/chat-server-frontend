import React from "react";

import Name from "./Name";
import UserList from "./UserList";

const headerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0 20px'
};

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
        };
    }

    addName(name) {
        this.setState({name});
    }

    render() {
        return(
            <header id="header" className="onerow" style={headerStyle}>
                <Name addName={this.addName.bind(this)} name={this.state.name} />
                <UserList />
            </header>
        );
    }
}
