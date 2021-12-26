const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const infos = require('./infos.json');

const modelDescription = require('./models/cv/description');
const modelEducation = require('./models/cv/educations');
const modelInterest = require('./models/cv/interests');
const modelJob = require('./models/cv/job');
const modelLanguage = require('./models/cv/languages');
const modelProject = require('./models/cv/projects');
const modelSkill = require('./models/cv/skills');
const modelWorkExperience = require('./models/cv/workExperiences');

// Router(s)
const descriptionRoutes = require('./routes/cv/description');
const educationRoutes = require('./routes/cv/education');
const interestRoutes = require('./routes/cv/interest');
const jobRoutes = require('./routes/cv/job');
const languageRoutes = require('./routes/cv/language');
const projectRoutes = require('./routes/cv/project');
const skillRoutes = require('./routes/cv/skill');
const workExperienceRoutes = require('./routes/cv/workExperience');

const app = express();

mongoose.connect(infos.mongo_str,
    { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/api/cv/description', descriptionRoutes);
app.use('/api/cv/educations', educationRoutes);
app.use('/api/cv/interests', interestRoutes);
app.use('/api/cv/job', jobRoutes);
app.use('/api/cv/languages', languageRoutes);
app.use('/api/cv/projects', projectRoutes);
app.use('/api/cv/skills', skillRoutes);
app.use('/api/cv/workExperiences', workExperienceRoutes);

module.exports = app;