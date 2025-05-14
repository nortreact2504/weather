import { Container, Row, Col } from "react-bootstrap";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import { useEffect, useState } from "react";
import { fetchLocationData } from "./util";
import useFetchWeatherData from "./hooks/useFetchWeatherData";

function WTDesktop() {

    const initialLocations = [
        { name: "Tallinn", lat: 59.4372, lon: 24.7536, locationData: null },
        { name: "Tartu", lat: 58.3772, lon: 26.7290, locationData: null },
        { name: "Pärnu", lat: 58.3852, lon: 24.4999, locationData: null },
        { name: "Narva", lat: 59.3772, lon: 28.1895, locationData: null },
        { name: "Kohtla-Järve", lat: 59.4167, lon: 27.2833, locationData: null }
    ]

    const [selectedLocation, setSelectedLocation] = useState(0);

    //const [locations, setLocations] = useState(initialLocations);
    const {locations, setLocations, isLoading, error}  = useFetchWeatherData(selectedLocation, initialLocations)


    let loadingJsx = ""
    let errorJsx = error ? <div className="alert">{error}</div> : ''

    if (isLoading) {
        loadingJsx = <div className="loading">Loading</div>
    } 

    return (
        <Container fluid className="weather-desktop">
            {loadingJsx}
            {errorJsx}
            <Row>
                <Col xs={4}>
                    <LeftPane locations={locations} locationSelected={setSelectedLocation} />
                </Col>
                <Col xs={8}>
                    <RightPane currentWeather={locations[selectedLocation].locationData} />
                </Col>
            </Row>
        </Container>
    )
}

export default WTDesktop