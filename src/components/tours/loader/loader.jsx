import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = (load) => {
    return (
        <div>
            {load.spinner
                ? <div className="backDrop">
                    <div className="loader">
                        <CircularProgress size={60} color={'secondary'} disableShrink={true}/>
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default Loader;