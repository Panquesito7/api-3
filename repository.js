const { Github } = require('./lib')

class Repo {
    constructor() {
        this.github = new Github();
    }
}

module.exports = Repo;