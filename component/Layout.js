import {FormattedMessage} from "react-intl";

const {Component} = require("react");

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <FormattedMessage id="help"/>
                {this.props.children}
            </div>
        )
    }
}
