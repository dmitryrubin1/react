import React from "react";
import PauseIcon from "@material-ui/icons/Pause";
import CloseIcon from "@material-ui/icons/Close";

const Item = (props) => {


    const changeIt = (e) => {
        console.log(e.target.checked, props.id)
        props.onStatusChange(
            {checked: e.target.checked}
        )
    }

        return (
            <div>
                <div id={props.id} className={"todo-item"}>
                    <input
                        type="checkbox"
                        onChange={changeIt}
                        value={props.id}
                        // checked={props.isChecked}
                        // defaultChecked={false}
                    />
                    {props.onStatusChange
                        ? <span>{props.text}</span>
                        : <span><strong>{props.text}</strong></span>
                    }
                    <div className="controls">
                        <button onClick={props.pause}>
                            <PauseIcon/>
                        </button>
                        <button onClick={props.delete}>
                            <CloseIcon/>
                        </button>
                    </div>
                </div>
            </div>
        );
}

export default Item;