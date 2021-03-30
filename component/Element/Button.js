import React, {Component} from "react";
import {FormattedMessage} from "react-intl";

export default class ElementButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button><FormattedMessage id="personalCenter"/></button>
        )
    }
}
