const Sequelize = require('sequelize')
const Chave = require('../apps/models/Chave')
const Tecnico = require('../apps/models/Tecnico');
const ChaveTecnico = require('../apps/models/ChaveTecnico');
const Usuarios = require('../apps/models/Usuarios')
const databaseConfig = require('../configs/db');
const models = []

class Database {
    constructor() {
        this.init();
    }
    init() {
        this.connection = new Sequelize(databaseConfig)
        models.map((model) => model.init(this.connection))
    }
}

module.exports = new Database();
