import React from "react";
import PauseIcon from "@material-ui/icons/Pause";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from '@material-ui/icons/Edit';
import styles from './item.module.scss';
import { motion } from "framer-motion"

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

    const editMode = () => {
        props.editStateProps(props.id)
    }

    return (
        <motion.div animate={{x: 0, y: -16, scale: 1}}
                    id={props.id}
                    className={`${styles.todoItem} ${props.isOnHold ? styles.onHold : ''}`}
        >
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
            <div className={styles.controls}>
                <button onClick={editMode}>>
                    <EditIcon/>
                </button>
                <button disabled={props.checked} onClick={PauseItem}>
                    <PauseIcon/>
                </button>
                <button disabled={!props.checked} onClick={deleteItem}>
                    <CloseIcon/>
                </button>
            </div>
        </motion.div>
    );
}

export default Item;