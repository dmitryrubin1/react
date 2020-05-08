import React from "react";
import PauseIcon from "@material-ui/icons/Pause";
import CloseIcon from "@material-ui/icons/Close";
import styles from './item.modules.scss';

const Item = (props) => {
    console.log(props)

    const onChange = () => {
        props.onChangeStatus(props.id)
    }

    const PauseItem = () => {
        props.pauseItemProps(props.id)
    }

    const deleteItem = () => {
        props.deleteItemsProps(props.id)
    }


    return (
        <div id={props.id} className={styles.todoItem}>
            <input
                type="checkbox"
                onChange={onChange}
                value={props.id}
                id={props.id}
                defaultChecked={props.checked}
                disabled={props.isOnHold}
            />
            {props.checked
                ? <span><s>{props.text}</s></span>
                : <span>{props.text}</span>
            }
            <div className="controls">
                <button disabled={props.checked} onClick={PauseItem}>
                    <PauseIcon/>
                </button>
                <button disabled={!props.checked} onClick={deleteItem}>
                    <CloseIcon/>
                </button>
            </div>
        </div>
    );
}

export default Item;