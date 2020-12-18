const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// middleware
app.use(cors());
app.use(express.json());

// ROUTES

// create a website
app.post('/website', async (req, res) => {
    try {
        const { name } = req.body;
        const newWebsite = await pool.query('INSERT INTO Weblapa (name) VALUES ($1) RETURNING *',
            [name]
        );

        res.json(newWebsite.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// get all webistes
app.get('/website', async (req, res) => {
    try {
        const allWebsites = await pool.query('SELECT * FROM Weblapa');

        res.json(allWebsites.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get 1 website
app.get('/website/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const website = await pool.query('SELECT * FROM Weblapa WHERE Weblapa.id = $1',
            [id]
        );

        res.json(website.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// update website
app.put('/website/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updateWebsite = await pool.query('UPDATE Weblapa SET name = $1 WHERE Weblapa.id = $2',
            [name, id]
        );

        res.json(updateWebsite);
    } catch (err) {
        console.error(err.message);
    }
});


// delete website
app.delete('/website/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteWebsite = await pool.query('DELETE FROM Weblapa WHERE Weblapa.id = $1',
            [id]
        );

        res.json(website.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log('server started on port 5000');
})

