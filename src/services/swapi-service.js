export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url} `);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, reciver ${res.status}`)
        }

        return await res.json();
    };

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformStarship);
    };

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}`);
        return this._tranformPerson(person);
    };

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._tranformPlanet);
    };

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._tranformPlanet(planet);
    };

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.resultes.map(this._transformStarship);
    }

    async getStarship(id) {
        const starShip = await this.getResource(`/starshops/${id}`);
        return this._transformStarship(starShip);
    }

    _extractId(item) {
        const idRegExp = /\/([0-9])*\/$/;
        return item.url.match(idRegExp)[1];
    };

    _tranformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _tranformPerson = (person) => {
        console.log(person)
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor,
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity,
        };
    };
};
