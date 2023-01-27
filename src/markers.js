// import React from 'react'
// import { Popup, useMapEvents } from 'react-leaflet';
// import { useState } from 'react';
// import { Marker } from 'react-leaflet';

// export function LocationMarker()  {
//     const [position, setPosition] = useState('');
//     const map = useMapEvents({
//         click() {
//             map.locate()
//         },
//         locationfound(e) {
//             setPosition(e.latlng)
//             map.flyTo(e.latlng, map.getZoom())
//         },
//     })
//   return position === null ? null : (
//     <Marker position={position}>
//     <Popup>you are currently Here</Popup>
//     </Marker>
//   )
// }

