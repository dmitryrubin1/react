import React from "react";
import NewsItem from "./news-item/news-item";


/*компонент без стейта будет функцией а класс если есть стейт у компонента?*/
class News extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false
        }

        // this.updateState = this.updateState.bind(this);
    }


    // создаем стрелочную функцию c изменением стейта

    updateState = () => {
        //что есть value?

        this.setState( (state) => ({
             open: !state.open
        }));
    };

    removeText = () => {
        this.setState ({
            textNews: 'remove text news'
        });
    };

    render() {
        return (
            <div className='news'>
                <NewsItem open={this.state.open} textNews={this.removeText}/>
                {/*инжектим функцию updateData в дочерний компонент */}

                {/*<NewsForm updateState={this.updateState}/>*/}
                <p>Parent component state : <b>{this.state.open.toString()}</b></p>
                <button onClick={this.updateState}>change state to : {this.state.open.toString()}</button>
            </div>
        );
    }
}

export default News;