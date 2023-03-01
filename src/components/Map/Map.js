import styles from '../../Styling/Map.module.css'
import { useState, useMemo, useCallback, useRef } from "react";

import {
  GoogleMap,
  Marker,
} from "@react-google-maps/api";


export default function Map () {

  //useMemo allows you to cache values between re-renders
  const testMark = useMemo(() => ({ lat: 51.2, lng: -0.29 }), []);
  const center = useMemo(() => ({ lat: 51.2, lng: -0.29 }), []);


  const mapRef = useRef();

  const options = useMemo(

    () => ({
      clickableIcons: false,
      disableDefaultUI: true,
      mapId: "a1fba3f6c23cfa4c",
    }),
    []
  );

  //allows you do cache a function definition betwene re-renders
  const onLoad = useCallback((map) => (
      mapRef.current = map), []);
  
  console.log(onLoad);

  return (
  <>
    <div className={`${styles.main_div}`}>
        <GoogleMap
            zoom={10}
            center={center}
            options={options}
            mapContainerClassName="map-container"
            onLoad={onLoad}
          >
            <Marker position={testMark}/>
        </GoogleMap>
    </div>
  </>
  )
}
