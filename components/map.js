// components/Map.js
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ location }) => {
    const mapContainerStyle = {
        height: '400px',
        width: '100%',
    };

    const center = {
        lat: location.latitude,
        lng: location.longitude,
    };
    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
