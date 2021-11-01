const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/user');
const infos = require('../infos.json');

export default function modify_user(req, res, next) {
    let obj;
    if (!req.body.password) {
        obj = { name: req.body.name, password: req.body.password, su: req.body.su };
    } else {
        obj = { name: req.body.name, su: req.body.su };
    }
    User.findOneAndUpdate({ name: req.body.name }, obj)
        .then(() => {
            res.status(201);
        })
        .catch(error => res.status(500).json({ error }));
}

export default function add_user(req, res, next) {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                name: req.body.name,
                password: hash,
                su: req.body.su
            });
            user.save()
                .then(() => res.status(201).json({ message: `Utilisateur ${req.body.name} créé !` }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
}

export default function delete_user(req, res, next) {
    User.deleteOne({ name: req.body.name })
        .then(() => {
            return res.status(201).json({ message: `Utilisateur ${req.body.name} supprimé !` });
        })
        .catch(error => res.status(500).json({ error }));
}

export default function login_user(req, res, next) {
    User.findOne({ name: req.body.name })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            infos.random_key,
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
}