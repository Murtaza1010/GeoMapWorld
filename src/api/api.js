const countryInfoUrl = process.env.REACT_APP_COUNTRY_INFO
const userNameGeoNames = process.env.REACT_APP_MY_USERNAME

async function checkAndReturn(resp) {
    if (resp.ok) {
        const jsonResp = await resp.json();
        return jsonResp
    } else {
        return { status: resp.status, statusText: resp.statusText }
    }
}
export const countryGeneralInfo = {

    async byCountry(countryIso) {
        const resp = await fetch(`${countryInfoUrl}${countryIso}&username=${userNameGeoNames}&style=full`);
        const data = checkAndReturn(resp);
        return data
    }
}

const api = { countryGeneralInfo };
export default api;