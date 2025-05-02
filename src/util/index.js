async function fetchLocationData(lat, long) {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`

    const response = await fetch(apiUrl)
    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();

    return {
        currentWeather: data.current_weather
    };

}

export { fetchLocationData };