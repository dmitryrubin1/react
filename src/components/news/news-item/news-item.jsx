import React from "react";
import { NavLink } from "react-router-dom";

class  NewsItem extends React.Component {

    constructor (props) {
        super(props);


        let date  = new Date().toLocaleDateString("en-US");
        this.state = {
            date: date,
            /*это для условия if*/
        }

        // const open = this.props.open;
    }

    
    render () {

        return(
            <div>
                <div className="news-item">
                    <NavLink exact to={"/News/" + this.props.url}>
                        <div className="author">Author : {this.props.author}</div>
                        <div className="text">{this.props.text && this.props.textNews}</div>
                        <div className="date">Date - {this.state.date.toString()}</div>
                        <div><b>X {this.props.open.toString()}</b></div>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default NewsItem;
