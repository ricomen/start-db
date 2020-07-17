import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from "../spinner";
import ErrorIndicator from  '../error-indicator';
import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  }

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  }

  onError = (err) => {
    console.error(err)
    this.setState({
      error: true,
    });
  };

  updatePlanet() {
    const id = 12;
    // const id = Math.floor( Math.random() * 6) + 1;
    this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
  }


  render() {
    const { planet, loading, error } = this.state;

    const PlanetView = ({ planet }) => {
      const { population,
              rotationPeriod,
              diameter,
              name,
              id} = planet;

      return (
          <>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name} />

            <div>
              <h4>{name}</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="term">Population</span>
                  <span>{population}</span>
                </li>
                <li className="list-group-item">
                  <span className="term">Rotation Period</span>
                  <span>{rotationPeriod}</span>
                </li>
                <li className="list-group-item">
                  <span className="term">Diameter</span>
                  <span>{diameter}</span>
                </li>
              </ul>
            </div>
          </>
      )
    }

    return (
      <div className="random-planet jumbotron rounded">

        {loading && !error && <Spinner />}

        {error && <ErrorIndicator />}

        {!loading && !error && <PlanetView planet={planet} />}

      </div>
    );

  }
}
