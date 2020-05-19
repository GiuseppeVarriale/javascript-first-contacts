class User {
  constructor(name, gender, birth, country, email, password, photo, admin) {
    this._name = name;
    this._gender = gender;
    this._birth = birth;
    this._country = country;
    this._email = email;
    this._password = password;
    this._photo = photo;
    this._admin = admin;
    this._register = new Date();
  }

  get name() {
    return this._name;
  }

  get gender() {
    return this._gender;
  }

  get birth() {
    return this.__birth;
  }

  get country() {
    return this._country;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }
  get photo() {
    return this._photo;
  }

  set photo(photo) {
    this._photo = photo;
  }

  get admin() {
    return this._admin;
  }

  get register() {
    return this._register;
  }

  loadFromJSON(json) {
    for (let name in json) {
      switch (name) {
        case "_register":
          this[name] = new Date(json[name]);
          break;

        default:
          this[name] = json[name];
      }
    }
  }
}
