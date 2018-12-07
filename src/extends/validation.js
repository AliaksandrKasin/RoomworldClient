class Validation {
    static objectIsEmpty(object) {
        for (let key in object) {
            if (object[key]){
                return true;
            }
        }
        return false;
    }

    static validateEmail(email) {
        let reg = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(String(email).toLowerCase());
    }
}

export default Validation;