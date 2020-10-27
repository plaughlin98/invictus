import React from 'react';
import {
    GoogleMap,
    useLoadScript,
    InfoWindow,
  } from "@react-google-maps/api";
import mapStyles from "../mapStyles";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import styles from "./Map.module.css";
  
  const libraries = ["places"];
  const mapContainerStyle = {
    width:"100%",
    height: "100%",
  };
  const center = {
      lat: 41.881832,
      lng: -87.623177,
  };
  const options = {
      styles: mapStyles,
      disableDefaultUI: true,
      zoomControl: true,
  }


  
export default function GoogleMapWindow() {

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const {isLoaded, loadError} = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries,
    });
  
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";
    return (
        <div className={styles["google-map"]}>
           <Search />
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
            options={options}
            onLoad={onMapLoad}
            ></GoogleMap>
        </div>
     
        )
}

export function Search() {
    const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
        requestOptions: {
            location: {lat: () => 41.881832, lng: () => -87.623177},
            radius: 200 * 1000,
        },
    });

    return (
    <div className= {styles.search}>
        <Combobox onSelect={(address) => {
        console.log(address);
    }}
    >
            <ComboboxInput
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                disabled={!ready}
                placeholder="Enter an Address"
                />
        </Combobox>

    </div>

    )
}