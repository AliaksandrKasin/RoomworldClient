const initialState = {
    flat: {
        name: "",
        description: "",
        spaceOffered: "Entire place",
        accommodates: 0,
        size: 1,
        cost: 0,
        checkIn: "",
        checkOut: "",
        countBathroom: 0,
        countBedroom: 0,
    },
    location: {
        country: "",
        city: "",
        numberHouse: "",
        numberHouseBlock: "",
        numberFlat: "",
        gpsPoint: "s34563456"
    },
    houseRuleses: [],
    amentieses: [],
    images: []

}

export default function registrationFlatReducer(state = initialState, action) {

    switch (action.type) {

        case 'NAME':
            return Object.assign(state, {flat: Object.assign(state.flat, {name: action.name})});

        case 'DESCRIPTION':
            return Object.assign(state, {flat: Object.assign(state.flat, {description: action.description})});

        case 'SPACE_OFFERED':
            return Object.assign(state, {flat: Object.assign(state.flat, {spaceOffered: action.spaceOffered})});

        case 'ACCOMMODATES':
            return Object.assign(state, {flat: Object.assign(state.flat, {accommodates: action.accommodates})});

        case 'SIZE':
            return Object.assign(state, {flat: Object.assign(state.flat, {size: action.size})});

        case 'PRICE':
            return Object.assign(state, {flat: Object.assign(state.flat, {cost: action.price})});

        case 'CHECK_IN':
            return Object.assign(state, {flat: Object.assign(state.flat, {checkIn: action.checkIn})});

        case 'CHECK_OUT':
            return Object.assign(state, {flat: Object.assign(state.flat, {checkOut: action.checkOut})});

        case 'COUNT_BATHROOM':
            return Object.assign(state, {flat: Object.assign(state.flat, {countBathroom: action.countBathroom})});

        case 'COUNT_BEDROOM':
            return Object.assign(state, {flat: Object.assign(state.flat, {countBedroom: action.countBedroom})});

        case 'COUNTRY':
            return Object.assign(state, {location: Object.assign(state.location, {country: action.country})});

        case 'CITY':
            return Object.assign(state, {location: Object.assign(state.location, {city: action.city})});

        case 'NUMBER_HOUSE':
            return Object.assign(state, {location: Object.assign(state.location, {numberHouse: action.numberHouse})});

        case 'NUMBER_HOUSE_BLOCK':
            return Object.assign(state, {location: Object.assign(state.location, {numberHouseBlock: action.numberHouseBlock})});

        case 'NUMBER_FLAT':
            return Object.assign(state, {location: Object.assign(state.location, {numberFlat: action.numberFlat})});

        case 'ADD_RULE':
            return Object.assign({}, state, {houseRuleses: [...state.houseRuleses, action.rule]});

        case 'REMOVE_RULE':
            return Object.assign({}, state, {houseRuleses: state.houseRuleses.filter(value => value.name !== action.rule)});

        case 'ADD_AMENITY':
            return Object.assign({}, state, {amentieses: [...state.amentieses, action.amenity]});

        case 'ADD_IMAGES':
            return Object.assign({}, state, {images: action.images});



        default:
            return state;
    }
}