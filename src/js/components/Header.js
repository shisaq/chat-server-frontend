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
    }

    render() {
        return(
            <header id="header" className="onerow" style={headerStyle}>
                <Name />
                <UserList />
            </header>
        );
    }
}
