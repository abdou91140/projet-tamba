// components/Map.js
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
    const mapContainerStyle = {
        height: '400px',
        width: '100%',
    };

    const center = {
        lat: 14.5180644,
        lng: -17.010441,
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
