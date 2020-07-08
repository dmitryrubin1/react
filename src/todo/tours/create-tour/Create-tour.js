import React from 'react';
import './Create-tour.scss';
import {bali} from "../../../assets/img/bali.jpg";

class CreateTour extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            images: {bali},
            description: '',
            price: 1000,
            isActive: true,
        }
    }

    closeForm = () => {
        this.props.closeHandle(
            !this.state.isVisibleAddTour
        )
    }

    handleChangeId = (event) => {
        this.setState({
            id: event.target.value
        })
    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    handleChangePrice = (event) => {
        this.setState({
            price: event.target.value
        })
    }

    handleChangeActive = (event) => {
        this.setState({
            isActive: event.target.checked
        })
    }

    submitTour= (event) => {
        event.preventDefault();
        this.props.addTour(
            {
                id: this.state.id,
                name: this.state.name,
                images: {bali},
                description: this.state.description,
                price: this.state.price,
                isActive: this.state.isActive
            }
        );

        this.setState({
            id: '',
            name: '',
            images: {bali},
            description: '',
            price: '',
            isActive: false
        })
    }

    render () {
        return (
            <div className={'create-form'}>
                <h3>create ticket tour</h3>
                <button onClick={this.closeForm} className="close">x</button>
                <form action="">
                    <ul>
                        <li>
                            <small>id ticket</small>
                            <input value={this.state.id}
                                   onChange={this.handleChangeId}
                                   placeholder={'id'}
                                   type="text"
                            />
                        </li>
                        <li>
                            <small>name</small>
                            <input value={this.state.name}
                                   onChange={this.handleChangeName}
                                   placeholder={'name'}
                                   type="text"
                            />
                        </li>
                        <li>
                            <small>description</small>
                            <textarea value={this.state.description}
                                      onChange={this.handleChangeDescription}
                                      placeholder={'description'}
                                      type="text"
                            />
                        </li>
                        <li>
                            <small>price</small>
                            <input value={this.state.price}
                                   onChange={this.handleChangePrice}
                                   placeholder={'price'}
                                   type="number"
                            />
                        </li>
                        <input onChange={this.handleChangeActive}
                               checked={this.state.isActive}
                               value={this.state.isActive}
                               type="checkbox"
                        />
                    </ul>
                    <button disabled={!this.state} onClick={this.submitTour} className={'add'}>
                        add tour
                    </button>
                </form>
            </div>
        )
    }
}

export default CreateTour;


