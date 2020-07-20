import React, { Component } from 'react';

import './person-details.css';
import SwapiService from '../../services/swapi-service';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson()
    }
    console.log(prevProps)
  }

  updatePerson() {
    console.log(this.props.person)
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({ person });
      })
  }

  render() {

    if (!this.state.person) {
      return <span>Select a person from a list</span>
    };

    const { person: { id, name, gender, birthDay, eyeColor } } = this.state;
    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="Planet"
        />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{ gender }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{ birthDay }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{ eyeColor }</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
