import React, {Component} from "react";
import {FormattedMessage} from "react-intl";

export default class ElementText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span style={{display: "block", width: '100px', height: '100px', background: "#666"}}>
               <FormattedMessage id="personalCenter"/>
            </span>
        )
    }
}
