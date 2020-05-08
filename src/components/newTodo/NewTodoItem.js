import React from 'react';
import PropTypes from 'prop-types'

const styleItem = {
    li: {
        display: 'flex',
        alignItems: 'center',
        height: '56px',
        marginBottom: 16,
        padding: '2px 12px',
        background: 'white',
        borderRadius: '8px',
        color: '#4141da'
    },

    input: {
        display: 'block',
        margin: '0 12px',
        fontSize: '14px'
    },

    button: {
        margin: '0 16px',
        background: 'indianred',
        border: '1px solid #eee',
        fontSize: '16px'
    }
}

const NewTodoItem = (item) => {
    console.log(item);
    return (
        <li style={styleItem.li}>
                <strong>{item.idProps}</strong>
                <input style={styleItem.input}
                       type="checkbox"
                       name="checkbox"
                       value={item.completedProps}
                       onChange={() => item.onChangeProps(item.idProps)}
                />
                <span>{item.titleProps}</span>
            <button style={styleItem.button}>&times;</button>
        </li>
    )
}


NewTodoItem.propTypes = {
    item: PropTypes.object,
}

export default NewTodoItem;