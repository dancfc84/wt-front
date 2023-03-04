import styles from '../../Styling/Map.module.css'
import { useState, useMemo, useCallback, useRef } from "react";
import { NavLink } from "react-router-dom"

import {
  GoogleMap,
  Marker,
} from "@react-google-maps/api";


export default function Map () {

  //useMemo allows you to cache values between re-renders
  const testMark = useMemo(() => ({ lat: 51.51, lng: -0.12 }), []);
  const center = useMemo(() => ({ lat: 51.51, lng: -0.12 }), []);


  const mapRef = useRef();

  const options = useMemo(

    () => ({
      clickableIcons: false,
      disableDefaultUI: true,
      mapId: "a1fba3f6c23cfa4c",
    }),
    []
  );

  //allows you do cache a function definition between re-renders
  const onLoad = useCallback((map) => (
      mapRef.current = map), []);
  
  console.log(onLoad);

  return (
  <>
    <div className={`${styles.main_div}`}>
      <header className={`${styles.header}`}>
        <div className={`${styles.header_container}`}>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/create">
            Create Account
          </NavLink>
          <NavLink to="/create">
            Add Species
          </NavLink>
          <NavLink to="/profile">
            Species
          </NavLink>
          <NavLink to="/profile">
            Latest Observations
          </NavLink>
          <NavLink to="/profile">
            Profile
          </NavLink>
          <NavLink to="/profile">
            About
          </NavLink>
          <NavLink to="/profile">
            Contacts
          </NavLink>
        </div>
      </header>
      <div className={`${styles.map_container}`}>
        <GoogleMap
            zoom={12}
            center={center}
            options={options}
            onLoad={onLoad}
            id={`${styles.map}`}
          >
            <Marker position={testMark}/>
        </GoogleMap>
        <div className={`${styles.map_searchwindow}`}>
          <section>
            <div>
              <div>
                <h2>Search</h2>
                <div>
                  <input></input>
                </div>
                <section>Filter</section>
                <section>Add a sighting</section>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={`footer ${styles.footer_class}`}>
        <ul>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </>
  )
}
