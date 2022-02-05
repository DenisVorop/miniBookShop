import React from "react";
import axios from 'axios';

import MenuContainer from "../Menu/MenuContainer";
import CardsContainer from "../Cards/CardsContainer";
import FilterContainer from "../Filter/FilterContainer";

import './App.scss';

//========================================================================================================================================================
class App extends React.Component {
    componentDidMount() {
        axios.get('./books.json').then(({ data }) => {
            this.props.setBooks(data);
        })
    }

    render() {
        return (
            <div className='wrapper'>
                <div className="container">
                    <MenuContainer />
                    <div className="body">
                        <div className="cards__wrapper">
                            <div className="card__row">
                                {!this.props.isReady ? 'Загрузка...' : this.props.books.map(book => {
                                    return <CardsContainer key={book.id} {...book} />
                                })}
                            </div>
                        </div>
                        <div className="filter__wrapper">
                            <FilterContainer setFilter={this.props.setFilter} filterBy={this.props.filterBy} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//========================================================================================================================================================

export default App;
