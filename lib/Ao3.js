import User from './User'
import Fandom from './Fandom'
import Search from './Search'

class Ao3{
    constructor(auth, apiBase) {
        this.__auth = auth || {};
    }

    getUser(user) {
        return new User(user, this.__auth);
    }

    getFandom(fandom) {
        return new fandom(fandom, this.__auth);
    }

}

module.exports = Ao3;