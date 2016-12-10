import React from "react";
import TextField from 'material-ui/TextField';

export default class Name extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div class="">
                <label class="">Name: </label>
                <TextField
                  hintText="nickname"
                  floatingLabelText="Press enter to submit"
                />
            </div>
        );
    }
}
