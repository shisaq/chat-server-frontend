import React from "react";
import RaisedButton from 'material-ui/RaisedButton';

import Header from "./Header";
import Rooms from "./Rooms";

export default class Layout extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div id="container">
                <Header />
                <Rooms />
                <RaisedButton label="Default" />
            </div>
        );
    }
}
