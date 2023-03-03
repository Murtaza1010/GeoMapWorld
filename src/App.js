import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
  Layer,
  Polygon

} from "react-leaflet";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaTimes, FaBars } from "react-icons/fa";
// Import Elements
import {
  AppContainer,
  Navigation,
  CountriesList,
  CountriesInfo,
  MapContainerMine,
} from "./App.elements";

import { addCities, selectCities, selectCapital, selectCountryInfo, selectCovidInfo } from "./components/features/CountryInfo/currentCountrySlice";
import countryBorders from '../src/resources/countryBorders.json'
import useGeoLocation from "./useGeoLocation";
import Navbar from "./components/Navigation/Navbar";
import { SideBar } from "./components/infoDisplayContainer/SideBar";
import CityInfo from "./components/features/CityInfo/CityInfo";
import api from "./api/api";



// const coordinates = countryBorders.features

// console.log(coordinates)
// L.geoJSON(coordinates, {
//   style: function (features) {
//     return {
//       fillColor: 'red',
//       fillOpacity: 1,
//       stroke: true,
//       color: 'grey',
//       weight: 2
//     };
//   }
// }).bindPopup(function (Layer) {
//   return Layer.features.properties.name;
// }).addTo(map)


const markerIcon = new L.Icon({
  iconUrl: require("../src/resources/images/markericon.png"),
  iconSize: [35, 45],
  iconAnchor: [23, 46],
  popupAnchor: [4, 46],
});
// Events

function App() {
  const capitalLatLon = useSelector(selectCapital);
  const animateRef = useRef(false);
  const [showSlideOutMenu, setShowSlideOutMenu] = useState(false);
  const [menuIsOpen, setIsMenuOpen] = useState(true);
  const [center, setCenter] = useState({ lat: 34.5260109, lng: 69.1776838 });
  const ZOOM_LEVEL = 7;
  const mapRef = useRef();
  const purpleOptions = { color: 'purple' }
  const countryInfo = useSelector(selectCountryInfo)
  const dispatch = useDispatch()
  const citiesData = useSelector(selectCities)




  useEffect(() => {
    async function CityApiCall() {

      if (countryInfo.north && countryInfo.east) {
        const resp = await api.countryGeneralInfo.citiesNearBy(countryInfo.north, countryInfo.south, countryInfo.east, countryInfo.west)
        if (resp) {

          dispatch(addCities(resp.geonames))
        }
      }
    }
    CityApiCall()
  }, [countryInfo]);





  //update Center when country capital data is changed
  //https://stackoverflow.com/questions/66272555/how-to-fly-to-a-location-in-react-leaflet
  //https://react-leaflet.js.org/docs/api-map/

  useEffect(() => {
    if (capitalLatLon) {
      setCenter({ lat: capitalLatLon.lat, lng: capitalLatLon.lon });
    }
  }, [capitalLatLon]);


  const HandleClickMap = ({ center }) => {
    const map = useMap();


    if (center.lat) {
      map.setView(center, map.getZoom());
    }

    return center.lat === undefined ? null : (
      <Marker position={center} icon={markerIcon}>
        <Popup>
          <CityInfo></CityInfo>
        </Popup>
      </Marker>
    );
  };
  const multiPolygon = countryBorders.features[0].geometry.coordinates

  const location = useGeoLocation();

  // const myLocation = () => {
  //   if (location.loaded && !location.error) {
  //     mapRef.current.leafletElement.flyTo(
  //       [location.coordinates.lat, location.coordinates.lng],
  //       ZOOM_LEVEL,
  //       { AnimationEffect: true }
  //     )
  //   } else {
  //     alert(location.error.message);
  //   }
  // }

  return (
    <AppContainer>
      <Navigation>
        <CountriesList>
          <Navbar setShowSlideOutMenu={setShowSlideOutMenu} />
        </CountriesList>
        <CountriesInfo>
          {<FaBars onClick={() => setShowSlideOutMenu(true)} />}
        </CountriesInfo>
        {
          <SideBar
            open={showSlideOutMenu}
            setOpen={setShowSlideOutMenu}
            close={() => setShowSlideOutMenu(false)}
          />
        }
      </Navigation>

      <MapContainerMine>
        <MapContainer
          center={center}
          zoom={ZOOM_LEVEL}
          scrollWheelZoom={true}
          ref={mapRef}
          style={{ height: "92vh" }}
        >
          <TileLayer
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a>, Contains OS data © Crown copyright and database right 2022'
            url="https://api.maptiler.com/maps/winter-v2/256/{z}/{x}/{y}.png?key=YDViR4V8G8VW4uyYJ70Y"
          />

          <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
          {center && <HandleClickMap center={center} />}

          {citiesData ? Object.values(citiesData).map((element, index) => (
            <Marker
              icon={markerIcon}
              position={
                [element.lat, element.lng]
              }
              key={index}

            >
              <Popup>
                <CityInfo city={element} />
              </Popup>
            </Marker>

          )) : null}



        </MapContainer>
      </MapContainerMine>
    </AppContainer>
  );
}

export default App;
