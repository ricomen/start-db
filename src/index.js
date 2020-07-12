const getResource = async ( url ) => {
    const res = await fetch( url );

    if( !res.ok ) {

        throw  new Error(`Could not fetch ${url}, reciver ${res.status}`)

    };

    const body = await res.json();

    return body;
};

getResource('https://swapi.dev/api/people/1ldfmvs/')
    .then(( body ) => {
        console.log( body );
    })
    .catch((err) => {
        console.log( err );
    });
