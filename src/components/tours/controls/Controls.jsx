import React from 'react';
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';
import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';
import RefreshSharpIcon from '@material-ui/icons/RefreshSharp';
import {button} from '../constants.js'
import {activeButton} from '../constants.js'

const Controls = (props) => {

    const {
        handleSortAsc,
        handleSortDesc,
        handleListView,
        handleGridView,
        handleRefresh,
        isActiveStyle,
        isViewSistem,
    } = props;

   return  (
       <>
           <button onClick={handleSortAsc} style={button}>
               <ArrowUpwardSharpIcon style={isActiveStyle ? activeButton : null}/>
           </button>

           <button onClick={handleSortDesc} style={button}>
               <ArrowDownwardSharpIcon style={isActiveStyle ? null : activeButton}/>
           </button>


           <button onClick={handleListView} style={button}>
               <ListIcon style={isViewSistem ? null : activeButton}/>
           </button>

           <button onClick={handleGridView} style={button}>
               <AppsIcon style={isViewSistem ? activeButton : null}/>
           </button>

           <button onClick={handleRefresh} style={button}>
               <RefreshSharpIcon />
           </button>
           {props.children}
       </>
   )
}

export default Controls;