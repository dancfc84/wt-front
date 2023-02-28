import styles from '../../Styling/Map.module.css'
import { useState, useMemo, useCallback, useRef } from "react";

import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  MarkerClusterer,
} from "@react-google-maps/api";


export default function Map () {

  const testMark = useMemo(() => ({ lat: 51.2, lng: -0.29 }), []);
  const center = useMemo(() => ({ lat: 51.2, lng: -0.29 }), []);

  const mapRef = useRef();

  const options = useMemo(

    () => ({
      clickableIcons: false,
      disableDefaultUI: true,
      //mapId = decides which map is shown, go to google maps platform to change and add more maps, 
      mapId: "a1fba3f6c23cfa4c",
    }),
    []

  );

  const onLoad = useCallback((map) => (mapRef.current = map), []);

  return (
  <>
  <div className={`${styles.main_div}`}>
    <h1>Hello</h1>
    <div>
      <GoogleMap
          zoom={10}
          center={center}
          options={options}
          mapContainerClassName="map-container"
          onLoad={onLoad}
          onClick={ev => {
            console.log("latitide = ", ev.latLng?.lat());
            console.log("longitude = ", ev.latLng?.lng());
            console.log(ev);
            
          }}
        >
          <Marker position={testMark}/>
      </GoogleMap>
    </div>
  </div>
  </>
  )
}
