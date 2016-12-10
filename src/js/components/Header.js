import React from "react";

import Name from "./Name";
import UserList from "./UserList";

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div id="container">
                <h1>Chat Server</h1>
                <Name />
                <UserList />
            </div>
        );
    }
}
