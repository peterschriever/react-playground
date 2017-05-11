import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import CityMap from '../components/city_map';

class CitiesList extends Component {
    renderWeather(cityData, index) {
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        const coords = cityData.city.coord;
        return (
            <tr key={index}>
                <td><CityMap lat={coords.lat}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    lon={coords.lon} />{cityData.city.name}: {coords.lat},{coords.lon}</td>
                <td><Chart color="red" data={temps} units="K" /></td>
                <td><Chart color="green" data={pressures} units="hPa" /></td>
                <td><Chart color="blue" data={humidities} units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }; // identical to {weather: state.weather}
}

export default connect(mapStateToProps)(CitiesList);
