import React, { useEffect, useState } from "react";
import {
  geocodeByAddress,
  getLatLng,
  geocodeByPlaceId,
} from "react-places-autocomplete";

const useSecondStep = (handleAddress) => {
  const [address, setAddress] = useState("");

  const handleSelect = async (address, placeId) => {
    setAddress(address);

    const results = await geocodeByAddress(address);

    const latLng = await getLatLng(results[0]);

    const [place] = await geocodeByPlaceId(placeId);

    const { long_name: pinCode = "" } =
      place?.address_components.find((c) => c.types.includes("postal_code")) ||
      {};

    const { long_name: state = "" } =
      place?.address_components.find((c) =>
        c.types.includes("administrative_area_level_1")
      ) || {};

    const { long_name: country = "" } =
      place?.address_components.find((c) => c.types.includes("country")) || {};

    const { long_name: city = "" } =
      place?.address_components.find((c) =>
        c.types.includes("administrative_area_level_3")
      ) || {};

    const updatedAddress = {
      addressLine1: place?.address_components?.[0]?.long_name,
      addressLine2: place?.address_components?.[1]?.long_name,
      state,
      city,
      country,
      pinCode,
      latLng,
    };

    handleAddress(updatedAddress);
  };

  return {
    address,
    setAddress,
    handleSelect,
  };
};

export default useSecondStep;
