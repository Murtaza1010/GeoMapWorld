
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { useState, useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import cities from 'cities.json';
import useGeoLocation from './useGeoLocation';
import Navbar from './components/Navigation/Navbar';
import { SideBar } from './components/infoDisplayContainer/SideBar';
import { FaTimes, FaBars } from 'react-icons/fa'
// Import Elements 
import { AppContainer, Navigation, CountriesList, CountriesInfo, MapContainerMine } from './App.elements';



const markerIcon = new L.Icon({
  iconUrl: require('../src/resources/images/markericon.png'),
  iconSize: [35, 45],
  iconAnchor: [23, 46],
  popupAnchor: [4, 46]
});

function App() {
  const [showSlideOutMenu, setShowSlideOutMenu] = useState(false);
  const [menuIsOpen, setIsMenuOpen] = useState(true);
  const [center, setCenter] = useState({ lat: 53.817773, lng: -1.53683 });
  const ZOOM_LEVEL = 6;
  const mapRef = useRef();




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
        <CountriesList><Navbar /></CountriesList>
        <CountriesInfo>
          {<FaBars onClick={() => setShowSlideOutMenu(true)} />}
        </CountriesInfo>
        {<SideBar open={showSlideOutMenu} setOpen={setShowSlideOutMenu} close={() => setShowSlideOutMenu(false)} />}
      </Navigation>
      <MapContainerMine>
        <MapContainer
          center={center}
          zoom={ZOOM_LEVEL}
          scrollWheelZoom={false}
          ref={mapRef}
          style={{ height: "92vh" }}


        >
          <TileLayer
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a>, Contains OS data © Crown copyright and database right 2022'
            url="https://api.maptiler.com/maps/winter-v2/256/{z}/{x}/{y}.png?key=YDViR4V8G8VW4uyYJ70Y"
          />
          {location.loaded && !location.error && (
            <Marker
              icon={markerIcon}
              position={
                [location.coordinates.lat,
                location.coordinates.lng,]
              }>
              <Popup>you are Here</Popup>
            </Marker>
          )}
        </MapContainer>
      </MapContainerMine>



    </AppContainer>
  );
}

export default App;
