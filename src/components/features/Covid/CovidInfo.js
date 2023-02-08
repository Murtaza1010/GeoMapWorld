import React from 'react'
import { CovidInfoContainer, CovidDataTable } from './CovidInfoStyles'





const covidInfo = () => {
  return (
        <CovidInfoContainer>
            <CovidDataTable> 
              <tr>
                  <th>Country Name</th>
                  <th>PussyLand</th>
              </tr>
              <tr>
                  <td>population</td>
                  <td>1223111</td>
              </tr>
              <tr>
                  <td>Total Cases</td>
                  <td>000</td>
              </tr>
              <tr>
                  <td>Total Death</td>
                  <td>en-GB,cy-GB,gd</td>
              </tr>
              <tr>
                  <td>Total Recovered</td>
                  <td>2635167</td>
              </tr>
              <tr>
                  <td>Active Cases</td>
                  <td>49.9028622252397</td>
              </tr>
              <tr>
                  <td>Total Tests</td>
                  <td>GBR</td>
              </tr>

            </CovidDataTable> 
      </CovidInfoContainer >
  )
}
export default covidInfo