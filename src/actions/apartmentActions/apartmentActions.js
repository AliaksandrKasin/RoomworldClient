export const SET_APARTMENT_DETAILS = 'SET_APARTMENT_DETAILS';
export const SET_APARTMENT_LOCATION = 'SET_APARTMENT_LOCATION';
export const SET_APARTMENT_IMAGES = 'SET_APARTMENT_IMAGES';
export const SET_APARTMENT_RATES = 'SET_APARTMENT_RATES';
export const SET_APARTMENT_RULES = 'SET_APARTMENT_RULES';
export const SET_APARTMENT_TYPES = 'SET_APARTMENT_TYPES';

export function setApartmentDetails(apartmentDetails) {
    return {
        type: SET_APARTMENT_DETAILS,
        apartmentDetails
    }
}

export function setApartmentLocation(location) {
    return {
        type: SET_APARTMENT_LOCATION,
        location
    }
}

export function setApartmentImages(images) {
    return {
        type: SET_APARTMENT_IMAGES,
        images
    }
}

export function setApartmentRates(rates) {
    return {
        type: SET_APARTMENT_RATES,
        rates
    }
}

export function setApartmentRules(rules) {
    return {
        type: SET_APARTMENT_RULES,
        rules
    }
}

export function setApartmentTypes(types) {
    return {
        type: SET_APARTMENT_TYPES,
        types
    }
}