import React from "react"
import PauseIcon from "@material-ui/icons/Pause";
import CloseIcon from "@material-ui/icons/Close";

class Item extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props);

        this.state = {
            items: [],
        }
    }

    childrenCheckItem = item => {
        this.props.checkItem ({
            checked: item.target.checked
        })


        // here function
        // console.log(this.props.checkItem);

        // console.log(item.target.checked);
    }


    deleteItem = item => {
        this.props.deleteItemsProps({
            items: [item, ...this.state.items]
        })
    }

    render() {
        return (
            <div>
                <div id={this.props.id} className={"todo-item"}>
                    <input
                        type="checkbox"
                        onChange={this.childrenCheckItem}
                        defaultChecked={false}
                    />
                    {this.props.checkItem
                        ? <span>{this.props.text}</span>
                        : <span><strong>{this.props.text}</strong></span>
                    }
                    <div className="controls">
                        <button onClick={this.pauseItem}>
                            <PauseIcon/>
                        </button>
                        <button onClick={() => this.deleteItem()}>
                            <CloseIcon/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item