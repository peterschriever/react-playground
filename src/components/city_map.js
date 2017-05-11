import React from 'react';
import _ from 'lodash';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

// const StartMap = withGoogleMap(props => {
//     <GoogleMap ref={props.onMapLoad}
//         defaultZoom={12}
//         defaultCenter={{ lat: props.lat, lng: props.lon }} >
//     </GoogleMap>
// });

export default withGoogleMap(props => (
    <GoogleMap ref={props.onMapLoad}
        defaultZoom={12}
        defaultCenter={{ lat: props.lat, lng: props.lon }}></GoogleMap>
));
