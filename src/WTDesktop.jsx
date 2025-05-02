import { Container, Row, Col } from "react-bootstrap";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import { useState } from "react";
import { fetchLocationData } from "./util";

function WTDesktop() {

    const [locations, setLocations] = useState([
        { name: "Tallinn", lat: 59.4372, lon: 24.7536, locationData: null },
        { name: "Tartu", lat: 58.3772, lon: 26.7290, locationData: null },
        { name: "Pärnu", lat: 58.3852, lon: 24.4999, locationData: null },
        { name: "Narva", lat: 59.3772, lon: 28.1895, locationData: null },
        { name: "Kohtla-Järve", lat: 59.4167, lon: 27.2833, locationData: null }
    ]);

    const [selectedLocation, setSelectedLocation] = useState(0);

    const locationSelected = async (index) => {
        console.log("Location selected: " + index);
        // Here you can add logic to fetch weather data for the selected location
        const location = locations[index];
        const {currentWeather} = await fetchLocationData(location.lat, location.lon)
        setSelectedLocation(index);
        console.log(currentWeather);
        const newLocationsData = locations.map((loc, i) => {
            if (i === index) {
                return { ...loc, locationData: currentWeather };
            }
            return loc;
        })
        setLocations(newLocationsData);
    }

    return (
        <Container fluid className="weather-desktop">
            <Row>
                <Col xs={4}>
                    <LeftPane locations={locations} locationSelected={locationSelected} />
                </Col>
                <Col xs={8}>
                    <RightPane currentWeather={locations[selectedLocation].locationData} />
                </Col>
            </Row>
        </Container>
    )
}

export default WTDesktop