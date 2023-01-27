import React, { useEffect } from 'react'
import { useState } from 'react';

const useGeoLocation = () => {
    const [location, setLocation ] = useState({
        loaded: false,
        coordinates: { lat:'', lng:''}
    });

    const onsSuccess = location => {
        setLocation({
            loaded: true,
            coordinates: { 
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            }
        })
    };
    const onError = error => {
        setLocation({
            loaded: true,
            error
        })
    }

    useEffect(() => {
        if( !('geolocation' in navigator)) {
            onError({
                code: 0,
                message: 'geolocation not supported'
            });
     
            }
         
        navigator.geolocation.getCurrentPosition(onsSuccess, onError);
    }, [])
  return location;
    
  
}

export default useGeoLocation