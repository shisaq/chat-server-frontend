import React from "react";
import TextField from 'material-ui/TextField';

const nameStyle = {
    width: '50%'
};

export default class Name extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div style={nameStyle}>
                <label class="">Name: </label>
                <TextField
                  hintText="nickname"
                  floatingLabelText="Press enter to submit"
                />
            </div>
        );
    }
}
