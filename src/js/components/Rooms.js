import React from "react";

import Room from "./Room";

const roomsStyle =  {
    border: '2px solid salmon',
    display: 'flex',
    flexWrap: 'wrap',
    padding: 15,
    margin: '10px auto',
    listStyle: 'none'
};

export default class Rooms extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <h2>This is Rooms area.</h2>
                <ul class="rooms" style={roomsStyle}>
                    <Room />
                    <Room />
                    <Room />
                    <Room />
                    <Room />
                    <Room />
                    <Room />
                    <Room />
                </ul>
            </div>
        );
    }
}
