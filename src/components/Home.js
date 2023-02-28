import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/Map/Map";


//In useLoadScript we want to use the places library - places enables your application to search for places such as establishments, geographic locations, or prominent points of interest, within a defined area

export default function Home() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBze2qF5Q9vy3xfq1peqxers1Lgc4i0AZM',
    libraries: ["places"],
  });

  
  //this checks if the useLoadScript worked...if it did returns map component
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
  
}
