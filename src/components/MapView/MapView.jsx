import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const MapView = ({ formData }) => {
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = formData?.latLng || {
    lat: 0,
    lng: 0,
  };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
      <Marker onLoad={onload} position={{ lat: 0, lng: 0 }} />
    </GoogleMap>
  );
};

export default MapView;
