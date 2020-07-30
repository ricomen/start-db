import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import './app.css';
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        selectedPerson: null,
    }

    onPersonSelected = (id) => {
        this.setState({
          selectedPerson: id
        })
    }

  render() {
    const { selectedPerson } = this.state;
    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPeople}/>
          </div>
          <div className="col-md-6">
            <PersonDetails
              personId={selectedPerson} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
              <ItemList
                  onItemSelected={this.onPersonSelected}
                  getData={this.swapiService.getAllPlanets}/>
          </div>
          <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>

    )
  }
};