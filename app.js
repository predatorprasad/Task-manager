const connectDB = require('./db/connect')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
require('dotenv').config()
//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
//app.get('/api/v1/tasks)  -get all tasks
//app.post('/api/v1/tasks)  -create new task tasks
//app.get('/api/v1/tasks/:id)  -get a single task
//app.patch('/api/v1/tasks/:id)  -update a task
//app.delete('/api/v1/tasks/:id)  -delete a task

app.use('/api/v1/tasks', tasks)


const port = 3000
const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`app listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}
start()


