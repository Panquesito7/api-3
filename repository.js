const { Github, Airtable } = require('./lib')

class Repo {
    constructor() {
        this.github = new Github();
        this.airtable = new Airtable();
    }
}

module.exports = new Repo;