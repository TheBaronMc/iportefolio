const mongoose = require('mongoose');

const infos = require('./infos.json');

const modelDescription = require('./models/cv/description');
const modelEducation = require('./models/cv/education');
const modelInterest = require('./models/cv/interest');
const modelJob = require('./models/cv/job');
const modelLanguage = require('./models/cv/language');
const modelProject = require('./models/cv/project');
const modelSkill = require('./models/cv/skill');
const modelWorkExperience = require('./models/cv/workExperience');

async function addToCollection(data, collection) {
    for (tuple of data) {
        await new collection(tuple).save();
    }
}

let main = async () => {
    await mongoose.connect(infos.mongo_str,
        { useNewUrlParser: true,
        useUnifiedTopology: true });
    console.log('Connexion à MongoDB réussie.');
    
    // Remove collections
    ['descriptions','educations','interests','jobs','languages','projects','skills','workexperiences']
    .forEach(async (value) => {
        try {
            await mongoose.connection.dropCollection(value);
        } catch (error) {

        }
    });
    console.log('Suppression des collections.');
    
    
    // Create new collection and fill them
    await addToCollection([
        {title: 'Apprentice'}
    ], modelJob);
    
    await addToCollection([
        {content : 'Apprentice as developer at Thales Alenia Space and student at ENSEEIHT. Curious and having a desire to learn. Want to continue in this field to become a software engineer.'}
    ], modelDescription);
    
    await addToCollection([
        {diploma: 'Computer Science', school: 'ENSEEIHT', location: 'Toulouse', beginDate: new Date(2020, 9, 1) },
        {diploma: 'DUT: Réseaux & Télécoms', school: 'IUT 1', location: 'Grenoble', beginDate: new Date(2018, 9, 1), endDate: new Date(2020, 6, 15) },
        {diploma: 'Baccalauréat STI2D', school: 'Lycée Charlie Chaplin', location: 'Décines-Charpieu', beginDate: new Date(2015, 9, 1), endDate: new Date(2018, 6, 15) }
    ], modelEducation);
    
    await addToCollection([
        {name: "cinema"},
        {name: "video games"},
        {name: "sports"}
    ], modelInterest);
    
    
    await addToCollection([
        {name: 'French', level: 17},
        {name: 'English', level: 17}
    ], modelLanguage);
    
    await addToCollection([
        {name: 'iExec demonstrator', beginDate: new Date(2018, 4, 12),
        endDate: new Date(2018, 6, 30), description: 'description project',
        tasks: ['task 1', 'task 2', 'task 3']}
    ], modelProject);
    
    await addToCollection([
        {skill: 'python', example: ['example1', 'example2']},
        {skill: 'javascript', example: ['example1', 'example2']}
    ], modelSkill);
    
    await addToCollection([
        {company: 'Thales Alenia Space', job: 'Apprentice', location: 'Toulouse', beginDate: new Date(2020, 9 , 1), description: 'job description', tasks:  ['task 1', 'task 2']},
        {company: 'Thales Alenia Space', job: 'Apprentice', location: 'Toulouse', beginDate: new Date(2020, 9 , 1), description: 'job description', tasks:  ['task 1', 'task 2']}
    ], modelWorkExperience);
    console.log('Création des collections.');

    await mongoose.disconnect();
    console.log('Déconnexion réussie.');
}

main();