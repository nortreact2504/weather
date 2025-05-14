function RightPane({currentWeather, isLoading}) {
    if (isLoading) {
        return <h3>Loading ...</h3>
    }
    
    if (!currentWeather) {
        return ;
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