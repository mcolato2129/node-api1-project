// BUILD YOUR SERVER HERE
const express = require('express');
const Users = require('./users/model');

const server = express();

server.use(express.json());

module.exports = server; // EXPORT YOUR SERVER instead of {}

server.get('/', (req, res) => {
    res.send('Hello World');
});

server.get('/api/users', async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: `The users information could not be retrieved`});
    };
})

server.get('/api/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const users = await Users.findById(id);
        if (!users) {
            res.status(404).json({ message: "The user with the specified ID does not exist" });
        }else{
            res.status(200).json(users);
        }
    } catch (err) {
        res.status(500).json({ message: `The users information could not be retrieved` });
    }
})

server.post('/api/users', async (req, res) => {
    try{

    }catch(err){
        res.status(500).json({message: "There was an error while saving the user to the database"})
    }
})