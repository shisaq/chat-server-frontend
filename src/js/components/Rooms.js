import React from "react";

const styles = {
    roomsStyle: {
        border: '2px solid salmon',
        display: 'flex',
        flexWrap: 'wrap',
        padding: 15,
        margin: '10px auto',
        listStyle: 'none'
    },
    roomStyle: {
        width: '30%',
        minWidth: 300,
        margin: 10,
        height: 350,
        border: '2px solid black'
    }
};

export default class Rooms extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <h2>This is Rooms area.</h2>
                <ul class="rooms" style={styles.roomsStyle}>
                    <li class="room" style={styles.roomStyle}>Room</li>
                    <li class="room" style={styles.roomStyle}>Room</li>
                    <li class="room" style={styles.roomStyle}>Room</li>
                    <li class="room" style={styles.roomStyle}>Room</li>
                    <li class="room" style={styles.roomStyle}>Room</li>
                    <li class="room" style={styles.roomStyle}>Room</li>
                    <li class="room" style={styles.roomStyle}>Room</li>
                    <li class="room" style={styles.roomStyle}>Room</li>
                </ul>
            </div>
        );
    }
}
