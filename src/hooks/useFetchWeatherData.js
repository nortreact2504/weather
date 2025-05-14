import { useEffect, useState } from "react"
import { fetchLocationData} from "../util"

function useFetchWeatherData(selectedLocation, initialLocations) {
    const [locations, setLocations] = useState(initialLocations)
    const [error, setError] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const location = locations[selectedLocation]
    console.log(location, selectedLocation);

    const loadWeatherData = async () => {
        setIsLoading(true)
        setError('')
        try {
            const {currentWeather} = await fetchLocationData(location.lat, location.lon)
            console.log(currentWeather)
            const newLocationsData = locations.map((loc, i) => {
                if (i === selectedLocation) {
                    return { ...loc, locationData: currentWeather };
                }
                return loc;
            })
        setLocations(newLocationsData); 
        } catch (error) {
            setError('Viga andmete lugemisel. Proovi uuesti hiljem')
            console.log(error.message)
        }
        setIsLoading(false)
    }

    useEffect(
        () => {
            loadWeatherData()
        },
        [selectedLocation]
    )

    return {locations, setLocations, isLoading, error}
}

export default useFetchWeatherData