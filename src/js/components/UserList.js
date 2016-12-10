import React from "react";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render() {
        return(
            <div>
                <label>Start a Conversation: </label>
                <select>
                    <option>Lily</option>
                    <option>Lucy</option>
                    <option>Jim</option>
                    <option>Hanmei</option>
                    <option>Tina</option>
                </select>
            </div>
        );
    }
}
