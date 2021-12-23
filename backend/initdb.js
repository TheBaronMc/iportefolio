const mongoose = require('mongoose')

const cvModels = require('./models/cv')

const data = require('./data.json')
const infos = require('./infos.json')

mongoose.connect(infos.mongo_str,
    { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));