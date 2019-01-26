import {
    SET_APARTMENT_DETAILS,
    SET_APARTMENT_IMAGES,
    SET_APARTMENT_LOCATION,
    SET_APARTMENT_RATES,
    SET_APARTMENT_RULES,
    SET_APARTMENT_TYPES, SET_SELECTED_APARTMENT
} from "../actions/apartmentActions/apartmentActions";

const initialState = {
    apartment: {
        headTitle: "",
        propertyDescription: "",
        accommodates: 1,
        apartmentSize: 1,
        amountBathroom: 1,
        amountBedroom: 1,
        apartmentTypeString: "",
        currency: "",
        apartmentRates: 1,
        minStay: 1,
        checkInTime: new Date(new Date().setHours(11, 0)),
        checkOutTime: new Date(new Date().setHours(9, 0)),
        apartmentLocation: {
            country: "",
            state: "",
            city: "",
            streetAddress: "",
        },
        rulesOfResidence: [],
        images: [],
        amenities: []
    },
    executionStatus: {
        detailsIsDone: false,
        locationIsDone: false,
        photosIsDone: false,
        ratesIsDone: false,
        rulesIsDone: false
    },
    apartmentTypes: [],
    selectedApartment: ""
};

export default function apartmentReducer(state = initialState, action) {
    switch (action.type) {
        case SET_APARTMENT_DETAILS:
            return Object.assign(state, {
                apartment: Object.assign(state.apartment, {
                    headTitle: action.apartmentDetails.headTitle,
                    propertyDescription: action.apartmentDetails.propertyDescription,
                    accommodates: action.apartmentDetails.accommodates,
                    apartmentSize: action.apartmentDetails.apartmentSize,
                    amountBathroom: action.apartmentDetails.amountBathroom,
                    amountBedroom: action.apartmentDetails.amountBedroom,
                    apartmentTypeString: action.apartmentDetails.apartmentType
                })
            });
        case SET_APARTMENT_LOCATION:
            return Object.assign(state, {
                apartment: Object.assign(state.apartment, {apartmentLocation: action.location})
            });
        case SET_APARTMENT_IMAGES:
            return Object.assign(state, {
                apartment: Object.assign(state.apartment, {images: action.images})
            });
        case SET_APARTMENT_RATES:
            return Object.assign(state, {
                apartment: Object.assign(state.apartment, {
                    currency: action.rates.currency,
                    minStay: action.rates.minStay,
                    apartmentRates: action.rates.apartmentRates,
                    checkInTime: action.rates.checkInTime,
                    checkOutTime: action.rates.checkOutTime
                })
            });
        case SET_APARTMENT_RULES:
            return Object.assign(state, {
                apartment: Object.assign(state.apartment, {rulesOfResidence: action.rules})
            });
        case SET_APARTMENT_TYPES:
            return Object.assign(state, {
                apartmentTypes: Object.assign(state.apartmentTypes, action.types)
            });
        case SET_SELECTED_APARTMENT:
            debugger
            return Object.assign(state, {
                selectedApartment: action.id
            });
        default:
            return state;
    }
}