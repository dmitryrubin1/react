import React from "react";

class NewsForm extends React.Component {

    constructor (props) {
        super(props);

        let date  = new Date().toLocaleDateString("en-US");
        this.state = {
            author: "state childComponents",
            text: "news",
            date: date
        }
    }

    /*на каждый обработчик свое событие ?*/

    onChangeAuthor = (event) => {
        this.setState({
            author: event.target.value,
        });
    }

    onChangeText = (event) => {
        this.setState({
            text: event.target.value,
        });
    }

    onChangeDate = (event) => {
        this.setState({
            date: event.target.value,
        });
    }


    // reset() {
    //     this.setState({
    //         author: "",
    //         text: "",
    //         date: ""
    //     })
    // }

    onSubmit = (event) => {
        event.preventDefault();
        /*reset() не работает, как сбрасывать формы*/
        /*state ресетит весь стейт*/
    }

    render () {

        return(
<div>
                <form className="news-form" ref="newsForm" action="" onSubmit={this.onSubmit}>
                    <input
                        placeholder={this.state.author}
                        type="text"
                        onChange={this.onChangeAuthor}
                        value={this.state.author}
                    />
                    <textarea
                        placeholder={this.state.text}
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        onChange={this.onChangeText}
                        value={this.state.text}
                    ></textarea>
                    <input
                        placeholder="date"
                        onChange={this.onChangeDate}
                        type="date"
                        value={this.state.date}
                    />
                    <button>Submit</button>
                </form>

                <p>{this.props.open}</p>
                <button>get state</button>
</div>
        )
    }
}

export default NewsForm;
