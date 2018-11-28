class Validation {
    static objectIsEmpty(object) {
        for (let key in object) {
            return true;
        }
        return false;
    }
}

export default Validation;