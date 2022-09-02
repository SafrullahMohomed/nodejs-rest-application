const Joi = require('joi');

const express = require('express');

const app = express();

app.use(express.json());
const courses = [{id:1, name:'java'}, {id:2, name:'javascript'}, {id:3, name:'node'}];

app.post('/api/courses', (req, res) => {
    const name = { name: req.body.name}
    
    const schema = Joi.object({
        name : Joi.string().min(3).required()
    });

    const result = schema.validate(name)

    if(result.error){
        res.status(400).send(result.error.details[0].message)
        return;
        
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    
    res.send(courses);
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`I am in the port ${port}`);
});

console.log(courses)
