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

// create a worker
app.post('/worker', async (req, res) => {
    try {
        const { name, surname, position, working_hours, salary, bank_account, department_name } = req.body;
        const newWebsite = await pool.query('INSERT INTO Darbinieki (name, surname, position, working_hours, salary, bank_account, department_name) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [name, surname, position, working_hours, salary, bank_account, department_name]
        );

        res.json(newWebsite.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// get all workers
app.get('/worker', async (req, res) => {
    try {
        const allWorkers = await pool.query('SELECT * FROM Darbinieki');

        res.json(allWorkers.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// create a automation test
app.post('/auto-qa', async (req, res) => {
    try {
        const { website_name, test_name, test_case, script_path, test_schedule } = req.body;
        const newTest = await pool.query('INSERT INTO Automatizeti_Testi (website_name, test_name, test_case, script_path, test_schedule) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [website_name, test_name, test_case, script_path, test_schedule]
        );

        res.json(newTest.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// get all automation scripts
app.get('/auto-qa', async (req, res) => {
    try {
        const allTests = await pool.query('SELECT * FROM Automatizeti_Testi');

        res.json(allTests.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log('server started on port 5000');
})

