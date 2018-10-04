export function initialState() {
    return {
        type: 'INITIAL'
    }
}

export function changeName(name) {
    return {
        type: 'NAME',
        name
    }
}

export function changeDescription(description) {
    return {
        type: 'DESCRIPTION',
        description
    }
}

export function changeSpaceOffered(spaceOffered) {
    return {
        type: 'SPACE_OFFERED',
        spaceOffered
    }
}

export function changeAccommodates(accommodates) {
    return {
        type: 'ACCOMMODATES',
        accommodates
    }
}

export function changeSize(size) {
    return {
        type: 'SIZE',
        size
    }
}

export function changePrice(price) {
    return {
        type: 'PRICE',
        price
    }
}

export function changeCheckIn(checkIn) {
    return {
        type: 'CHECK_IN',
        checkIn
    }
}

export function changeCheckOut(checkOut) {
    return {
        type: 'CHECK_OUT',
        checkOut
    }
}

export function changeCountBathroom(countBathroom) {
    return {
        type: 'COUNT_BATHROOM',
        countBathroom
    }
}

export function changeCountBedroom(countBedroom) {
    return {
        type: 'COUNT_BEDROOM',
        countBedroom
    }
}

export function changeCountry(country) {
    return {
        type: 'COUNTRY',
        country
    }
}

export function changeCity(city) {
    return {
        type: 'CITY',
        city
    }
}

export function changeNumberHouse(numberHouse) {
    return {
        type: 'NUMBER_HOUSE',
        numberHouse
    }
}

export function changeNumberHouseBlock(numberHouseBlock) {
    return {
        type: 'NUMBER_HOUSE_BLOCK',
        numberHouseBlock
    }
}

export function changeNumberFlat(numberFlat) {
    return {
        type: 'NUMBER_FLAT',
        numberFlat
    }
}

export function addRule(rule) {
    return {
        type: 'ADD_RULE',
        rule
    }
}

export function removeRule(rule) {
    return {
        type: 'REMOVE_RULE',
        rule
    }
}

export function addAmenity(amenity) {
    return {
        type: 'ADD_AMENITY',
        amenity
    }
}

export function addImages(images) {
    return {
        type: 'ADD_IMAGES',
        images
    }
}
