import React from 'react';
import TourItem from './tour-item/TourItem'
import './Tours.scss'
import {bali} from './../../assets/img/bali.jpg';
import Notification from "./notification/notification";
import Loader from "./loader/loader";
import Controls from "./controls/Controls";
import CreateTour from "./create-tour/Create-tour";
import AddIcon from '@material-ui/icons/Add';
import {button} from './constants.js'

class Tours extends React.Component {
    constructor() {
        super();

        this.initialState = {
            tours: [
                {
                    id: '1',
                    name: 'Bali',
                    images: {bali},
                    description: 'Easy peasy! From the international airport of Bali, starts one long 10km stretch of sandy sunset beach, passing the three main beach destinations of the south; Kuta, Legian, and Seminyak. There is a reason why it is called sunset beach. Every day you can gaze at the breathtaking sunset of the island.',
                    price: 1000,
                    isActive: true
                },

                //cuba
                {
                    id: '2',
                    name: 'Cuba',
                    images: './assets/img/cuba.jpg',
                    description: 'Beaches in Indonesia are extensive, characterized by coral reefs, deposits from volcanoes, rich marine biodiversity, strong ocean currents, and associated with diverse cultural traditions. With around 17,500 islands, Indonesia has an intricate coastline of over 80,000 km, the fourth longest in the world',
                    price: 900,
                    isActive: false
                },

                //indonesia
                {
                    id: '3',
                    name: 'Indonesia',
                    images: './assets/img/indonesia.jpg',
                    description: 'Cuba is a popular all-inclusive vacation destination for its stunning, white sand beaches, and its affordable price point. And with 300 beaches across the 600-kilometer island, it\'s not hard to see why it\'s so well known for its stunning white sand, crystal clear waters, and swaying palm trees',
                    price: 1750,
                    isActive: true
                },

                //california
                {
                    id: '4',
                    name: 'California',
                    images: './assets/img/california.jpg',
                    description: 'California, a western U.S. state, stretches from the Mexican border along the Pacific for nearly 900 miles. Its terrain includes cliff-lined beaches, redwood forest, the Sierra Nevada Mountains, Central Valley farmland and the Mojave Desert. The city of Los Angeles is the seat of the Hollywood entertainment industry. Hilly San Francisco is known for the Golden Gate Bridge, Alcatraz Island and cable cars.',
                    price: 1200,
                    isActive: false
                },


            ],
            isGridView: false,
            isActiveSort: false,
            showMessage: false,
            message: '',
            isLoading: false,
            isVisibleAddTour: false

        }
        this.state = this.initialState;
    }

    handleAddTour = (closeForm) => {
        this.setState({
            isVisibleAddTour: !this.state.isVisibleAddTour || !closeForm
        })
    }

    handleListView = () => {
        this.setState ({
            isGridView: false,
        });
        this.showMessage('you choiced list view app');
    }

    handleGridView = () => {
        this.setState({
            isGridView: true,
        });
        this.showMessage('you choiced grid view app');
    }

    showMessage = (str) => {
        this.setState({
            showMessage:true,
            message: str
        });
        setTimeout(() => {
            this.setState({showMessage: false});
        }, 2000);
    }

    handleSortAsc = () => {
        const sortToursAsc = this.state.tours;
        sortToursAsc.sort((a, b) => {
            return b.price - a.price;
        });
        this.setState({
            tours: sortToursAsc,
            isActiveSort: !this.state.isActiveSort
        })

        this.showMessage('you sorted tours Asc');
    }

    handleSortDesc = () => {
        const sortToursDesc = this.state.tours;
        sortToursDesc.sort((a, b) => {
           return  a.price - b.price
        });
        this.setState({
            tours: sortToursDesc,
            isActiveSort: !this.state.isActiveSort
        })

        this.showMessage('you sorted tours Desc');
    }

    refreshTours = () => {
        this.setState({isLoading: true});
        setTimeout(() => {
            this.setState(this.initialState);
            this.showMessage('you refresh state app ');
        }, 2000);
    }

    deleteItem = (tour) => {
        this.setState(prevState => ({
            tours: prevState.tours.filter(el => el !== tour )
        }));
        this.showMessage('you delete tour ' + tour.name);
    }

    createTour = (item) => {
        const arrayTours = this.state.tours;
        const newArray = [...arrayTours, item]
        this.setState({
            tours: newArray
        });
    }

    render () {
        return (
            <div>
                <div className="controls">
                    <button onClick={this.handleAddTour} style={button}>
                        <AddIcon/>
                    </button>
                    <Controls
                        isActiveStyle={this.state.isActiveSort}
                        isViewSistem={this.state.isGridView}
                        handleSortAsc={this.handleSortAsc}
                        handleSortDesc={this.handleSortDesc}
                        handleGridView={this.handleGridView}
                        handleListView={this.handleListView}
                        handleRefresh={this.refreshTours}
                    />
                </div>

                {this.state.isVisibleAddTour
                    ? <CreateTour
                        isShow={this.state.isVisibleAddTour}
                        addTour={this.createTour}
                        closeHandle={this.handleAddTour}
                    />
                    : null
                }

                <Loader spinner={this.state.isLoading}/>
                <ul className={this.state.isGridView ? 'tour-grid' : 'tour-list'}>
                    {
                        this.state.tours.map((tour, index) => {
                            return (
                                <TourItem
                                    key={index}
                                    title={tour.name}
                                    background={tour.images}
                                    desc={tour.description}
                                    price={tour.price}
                                    isActiveTour={tour.isActive}
                                    _handleDelete={() => this.deleteItem(tour)}
                                />
                            )
                        })
                    }
                </ul>
                <Notification
                    message={this.state.message}
                    isShowMessage={this.state.showMessage}
                />
            </div>
        )
    }
}

export default Tours;