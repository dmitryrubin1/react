import React from 'react'
import './notification.scss'

const Notification = (notification) => {

    return (
        notification.isShowMessage
            ? <div className={'message'}> {notification.message} </div>
            : null

    )
}

export default Notification;