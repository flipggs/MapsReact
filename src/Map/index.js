import React from 'react'
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from 'react-google-maps'

const Map = withScriptjs(withGoogleMap((props) => {
    return (
        <GoogleMap defaultZoom={15}
            center={{ lat: -19.9227416, lng: -43.9451659 }}>
            <Marker position={{ lat: -19.9227416, lng: -43.9451659 }}/>
        </GoogleMap>
    )
}))

export default Map