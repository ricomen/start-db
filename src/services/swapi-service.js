export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await fetch( `${this._apiBase}${url} `);
        
        if ( !res.ok ) {
            throw new Error(`Could not fetch ${url}, reciver ${res.status}`)
        }

        return await res.json();
    };

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    };

    async getPerson(id) {
        const res = await this.getResource(`/people/${id}`);
        return res;
    };

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res;
    };

    async getPlanet(id) {
        const res = await this.getResource(`/planet/${id}`);
        return res;
    };

};