import React from "react";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

const styles = {
  customWidth: {
    width: 300,
  },
};

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 3};
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div>
                <label>Start a Conversation:</label>
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={styles.customWidth}
                    autoWidth={false}
                    maxHeight={300}
                >
                    <MenuItem value={1} primaryText="Select a user..." />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </DropDownMenu>
            </div>
        );
    }
}
