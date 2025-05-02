function RightPane({currentWeather}) {
    if (!currentWeather) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Current Weather</h2>
            <p>Temperature: {currentWeather.temperature}°C</p>
            <p>Wind Speed: {currentWeather.windspeed} km/h</p>
        </div>
    )
}

export default RightPane;