const express = require('express');

const app = express();


// const c1 = courses.find(c => c.id === 1);
// console.log(c1);

app.get('/', (req, res) => {
    res.send('hello world')
});

app.get('/first/:id/:year', (req, res) => {
    res.send(req.params);
});

app.get('/courses/:id', (req, res) => {
    // console.log(req.params);
const course = courses.find(c => c.id === parseInt(req.params.id));
if (!course) res.status(404).send('page not found');
res.send(course);
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('I am listening to '+port));