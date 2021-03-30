import React, {Component} from "react";

export default class ElementShape extends Component {

    constructor(props) {
        super(props);
        this._dragStart = this.dragStart.bind(this);
        this.offsetItem = {top: 0, left: 0}
        this.state = {left: this.props.offsetItem.left, top: this.props.offsetItem.top};
    }

    dragStart(ev) {
        ev.stopPropagation();
        this.disX = ev.clientX - ev.target.offsetLeft;
        this.disY = ev.clientY - ev.target.offsetTop;
        this._dragMove = this.dragMove.bind(this);
        this._dragEnd = this.dragEnd.bind(this);
        this.offsetItem = this.props.offsetItem ? this.props.offsetItem : {top: 0, left: 0}
        document.addEventListener('mousemove', this._dragMove, false);
        document.addEventListener('mouseup', this._dragEnd, false);
    }

    dragMove(ev) {
        ev.stopPropagation();
        this.clientX = ev.clientX;
        this.clientY = ev.clientY;
        let left = this.clientX - this.disX + this.offsetItem.left;
        let top = this.clientY - this.disY + this.offsetItem.top;
        this.props.onSetOffset(this.props.index, top, left)
        this.setState({left: left, top: top});
    }

    dragEnd() {
        document.removeEventListener('mousemove', this._dragMove);
        document.removeEventListener('mouseup', this._dragEnd);
    }

    render() {
        return (
            <div style={{
                'left': this.state.left,
                'top': this.state.top,
                'zIndex': this.zIndex,
                'position': "absolute",
                'cursor': "move",
                'userSelect': "none"
            }}
                 onMouseDown={this._dragStart}
                 ref="dragPanel">
                {this.props.children}
            </div>
        )
    }
}
