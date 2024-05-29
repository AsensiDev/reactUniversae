const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Conectar a MongoDB
mongoose.connect('mongodb+srv://iciar:<password>@proyectouniversae.wvycaa6.mongodb.net/, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', UserSchema);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).send('Usuario registrado exitosamente');
    } catch (error) {
        res.status(500).send('Error al registrar el usuario');
    }
});

app.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 5000');
});