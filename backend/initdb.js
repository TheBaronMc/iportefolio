const mongoose = require('mongoose')
const prompt = require('prompt-sync')()

const cvModels = require('./models/cv')
const contactModel = require('./models/contact')

const data = require('./data.json')
const infos = require('./infos.json')

// Connection to Mongo
mongoose.connect(infos.mongo_str,
    { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


strToDate = (str) => {
  let l = str.split('/')
  let month = Number.parseInt(l[0])
  let year = Number.parseInt(l[1])
  let d = new Date()

  d.setFullYear(year)
  d.setMonth(month)

  return d
}

async function addCollections(data, model) {
  for (let tuple of data) {
    if (tuple['endDate']) {
      tuple['endDate'] = strToDate(tuple['endDate'])
    }
    if (tuple['beginDate']) {
      tuple['beginDate'] = strToDate(tuple['beginDate'])
    }
    await new model(tuple).save();
  }
}

let main = async () => {
  let models = ['job', 'description', 'educations', 'workExperiences', 'skills', 'projects', 'languages', 'interests']
  let collections = ['Job', 'Skills']

  // remove existing collections
  
  let choice = prompt('Remove existing collections? (y/n)')
  if (choice == 'y') {
    for (let collection of models) {
      try {
        await mongoose.connection.dropCollection(collection)
      } catch (e) {
        console.log(e);
        console.log(collection);
      }
    }
    try {
      await mongoose.connection.dropCollection('contact')
    } catch (e) {
      console.log(e)
      console.log('contact')
    }
  }

  // Create new collections
  for (let model of models) {    
    await addCollections(data[model], cvModels[model])
  }
  await addCollections(data['contact'], contactModel)

  // Disconnect from Mongo
  await mongoose.disconnect()
  console.log('Déconnexion de Mongo.');
}

main()