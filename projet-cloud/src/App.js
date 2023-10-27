import logo from './logo.svg';
import './App.css';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

  <div>
    const MyMapComponent = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
));
  </div>




