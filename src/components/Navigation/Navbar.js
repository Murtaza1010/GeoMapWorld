import React, { useEffect } from 'react';
import { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchCountry';
import SearchCountry from './SearchCountry';
import Select from 'react-select'
import countryNames from '../../resources/countryBorders.json';


// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }



// countryBorders.json['features'].forEach(feature => countryNames.push(feature['properties']['name']))

// const fillCountriesSelect = (dataFeatures) => {
//   divCountries = document.getElementById('countries')
//   Select = "<Select>"
//   dataFeatures.forEach(feature => {
//     Select += feature['properties']['name']
//   })
//   select += "</select>"
//   divCountries.innerHTML = Select
// }

const Navbar = () => {
  const [listOfCountries, setListOfCountries] = useState([]);
  // const [newOptions, setNewOptions] = useState([])

  // 

  const features = countryNames.features
  useEffect(() => {
    // console.log(features)
    setListOfCountries(features.map(element => element.properties.name))
    // options = listOfCountries.map(element =>  {value: element, label: element})
    //dispatch(addCountryList(listOfCountries))
    // const countryList = listOfCountries.map(element => {
    //   const obj = {};
    //   obj.value = element;
    //   obj.label = element;

    //   return obj;
    // })
    // async function mapCou

    // setNewOptions(listOfCountries.map(element => {
    //   const obj = {};
    //   obj.value = element;
    //   obj.label = element;

    //   return obj;
    // }))


  }, [])

  const [showCountries, setShowCountries] = useState(false);

  // useSelector(listOfCOuntriesFromRedux)
  // options but take the value and label from listOfCountriesFromRedux


  // const options = 
  // const options = [
  //   { value: 'Afghanistan', label: 'Afghanistan' },
  //   { value: 'United kingdom', label: 'United Kingdom of Great Britian' },
  //   { value: 'India', label: 'India' }
  // ]


  return (
    <nav>

      <div >
        {/* <button onClick={() => setShowCountries(!showCountries)} className='dropBtn'>Search By Country</button> */}
        {listOfCountries && (
          <select className="dropBtn">
            <option disabled value="">Select a Country...</option>
            {listOfCountries.sort().map((element, index) => <option key={index} value={element}> {element}</option>)}
          </select>



        )}
        {/* <SearchCountry className="mySelect"/> */}
      
      </div>

    </nav>

  )
}

export default Navbar