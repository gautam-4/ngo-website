import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 28.9716,
  lng: 77.1594
};

const api_key = import.meta.env.VITE_API_KEY;

const MapContainer = () => {
  return (
    <LoadScript googleMapsApiKey={`${api_key}`}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      > 
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;