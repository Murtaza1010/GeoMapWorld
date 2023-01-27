import React, { useState } from 'react';

import Select from 'react-select';
import countryList from '../../resources/countryBorders.json';



export default () => {


    return (
        <>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={countryList.features[0]}
   
            
                name="Bahamas"
                options={countryList.features}
            />

            <div
                style={{
                    color: 'hsl(0, 0%, 40%)',
                    display: 'inline-block',
                    fontSize: 12,
                    fontStyle: 'italic',
                    marginTop: '1em',
                }}
            >
               
            </div>
        </>
    );
};
