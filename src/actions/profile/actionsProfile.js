export const SET_PROFILE = 'ADD_PROFILE';
export const SET_CHANGED_PROFILE = 'ADD_CHANGED_PROFILE';
export const SET_PROFILE_NAME = 'SET_PROFILE_NAME';
export const SET_PROFILE_SURNAME = 'SET_PROFILE_SURNAME';
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const SET_USERNAME = 'SET_USERNAME';

export function setProfile(profile) {
    return {
        type: SET_PROFILE,
        profile
    }
}

export function setChangedProfile(changedProfile) {
    return {
        type: SET_CHANGED_PROFILE,
        changedProfile
    }
}

export function setProfileName(name) {
    return {
        type: SET_PROFILE_NAME,
        name
    }
}

export function setProfileSurname(surname) {
    return {
        type: SET_PROFILE_SURNAME,
        surname
    }
}

export function setPhoneNumber(phoneNumber) {
    return {
        type: SET_PHONE_NUMBER,
        phoneNumber
    }
}

export function setUsername(username) {
    return {
        type: SET_USERNAME,
        username
    }
}