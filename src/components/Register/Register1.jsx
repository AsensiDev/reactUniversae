import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5000/register', {
                username,
                email,
                password
            });
            alert('Usuario registrado exitosamente');
        } catch (error) {
            console.error('Error al registrar el usuario', error);
            alert('Error al registrar el usuario');
        }
    };

    return (
        <form onSubmit={handleSubmit} class="Register">
            <div>
                <label>Nombre de usuario:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div>
                <label>Contraseña:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <button type="submit">Registrarse</button>
        </form>
    );
};

export default Register;