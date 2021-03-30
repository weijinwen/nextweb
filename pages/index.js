import {Component} from "react";
import AdminLayout from "../component/Layout/AdminLayout";
import {FormattedMessage} from "react-intl";
import ElementText from "../component/Element/Text";
import ElementButton from "../component/Element/Button";
import ElementShape from "../component/Element/Shape";


export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elementList: [],
            offsetList: []
        }
    }

    dragOver(ev) {
        ev.preventDefault();
    }

    dragStart(ev) {
        let picId = ev.target.dataset['id']
        let className = ev.target.className
        let data = '{"picId":' + picId + ',"className":"' + className + '"}'
        ev.dataTransfer.setData("Component", data);
    }

    dragDrop(ev) {
        ev.preventDefault();
        let elementList = this.state.elementList
        let data = JSON.parse(ev.dataTransfer.getData("Component"))
        elementList.push(data)

        let offsetList = this.state.offsetList
        offsetList.push({top: ev.nativeEvent.offsetY, left: ev.nativeEvent.offsetX})
        this.setState({offsetList: offsetList, elementList: elementList})
    }

    onSetOffset(key, top, left) {
        let offsetList = this.state.offsetList
        offsetList[key] = {top: top, left: left}
        this.setState({offsetList: offsetList})
    }

    render() {
        return (
            <AdminLayout ptitle={<FormattedMessage id="help"/>} ctitle={<FormattedMessage id="help"/>}>
                <div
                    onDrop={this.dragDrop.bind(this)}
                    onDragOver={this.dragOver.bind(this)}
                    className="site-layout-background"
                    style={{padding: 24, minHeight: 360, position: "relative"}}
                >
                    {this.state.elementList.map((item, index) => {
                        let element;
                        {
                            if (item.className === 'v-text') {
                                element = <ElementText key={index}/>
                            } else if (item.className === 'v-button') {
                                element = <ElementButton key={index}/>
                            }
                        }
                        return (
                            <ElementShape offsetItem={this.state.offsetList[index]}
                                          onSetOffset={this.onSetOffset.bind(this)} key={index} index={index}>
                                {element}
                            </ElementShape>
                        )
                    })}
                </div>
                <button
                    data-id={10}
                    className={"v-text"}
                    draggable="true"
                    onDragStart={this.dragStart.bind(this)}
                >字体
                </button>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <button
                    data-id={10}
                    className={"v-button"}
                    draggable="true"
                    onDragStart={this.dragStart.bind(this)}
                >按钮
                </button>
            </AdminLayout>
        )
    }
}
