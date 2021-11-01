const express = require('express');
const bodyParser = require('body-parser');
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
app.use('/api/cv/education', educationRoutes);
app.use('/api/cv/interest', interestRoutes);
app.use('/api/cv/job', jobRoutes);
app.use('/api/cv/language', languageRoutes);
app.use('/api/cv/project', projectRoutes);
app.use('/api/cv/skill', skillRoutes);
app.use('/api/cv/workExperience', workExperienceRoutes);

module.exports = app;