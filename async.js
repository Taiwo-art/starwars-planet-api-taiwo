///extract data///
const getPlanetApi = async() => {
    let planetApi = await fetch("https://swapi.dev/api/planets");
    let planetData = await planetApi.json();
    let finalData = planetData.results
        let result = finalData.map(planet =>`<li> name: ${planet.name} ---- rotation period: ${planet.rotation_period} --- population: ${planet.population}  --- residents: ${planet.residents}</li>`)
        return document.body.innerHTML = result.join('');
    
}
getPlanetApi()

//functions to get a code