import React, { useEffect } from "react";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const MapView = ({ formData }) => {
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = formData?.latLng || {
    lat: 0,
    lng: 0,
  };
  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
      <Marker onLoad={onload} position={formData?.latLng} />
    </GoogleMap>
  );
};

export default MapView;
