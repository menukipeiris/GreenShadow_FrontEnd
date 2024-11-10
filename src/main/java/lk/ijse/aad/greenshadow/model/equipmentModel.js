export default class equipmentModel{
    constructor(equipId,equipName,type,status,staff,field) {
        this._equipId = equipId;
        this._equipName = equipName;
        this._type = type;
        this._status = status;
        this._staff = staff;
        this._field = field;
    }

    get equipId() {
        return this._equipId;
    }

    set equipId(value) {
        this._equipId = value;
    }

    get equipName() {
        return this._equipName;
    }

    set equipName(value) {
        this._equipName = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
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

    get field() {
        return this._field;
    }

    set field(value) {
        this._field = value;
    }
}