export default class vehicleModel{
    constructor(vehicleCode,plateNu,category,fuelType,status,staff,remarks) {

        this._vehicleCode = vehicleCode;
        this._plateNu = plateNu;
        this._category = category;
        this._fuelType = fuelType;
        this._status = status;
        this._staff = staff;
        this._remarks = remarks;
    }

    get vehicleCode() {
        return this._vehicleCode;
    }

    set vehicleCode(value) {
        this._vehicleCode = value;
    }

    get plateNu() {
        return this._plateNu;
    }

    set plateNu(value) {
        this._plateNu = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get fuelType() {
        return this._fuelType;
    }

    set fuelType(value) {
        this._fuelType = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get staff() {
        return this._staff;
    }

    set staff(value) {
        this._staff = value;
    }

    get remarks() {
        return this._remarks;
    }

    set remarks(value) {
        this._remarks = value;
    }
}