import express from 'express';

const app = express()

app.use(express.json())

app.get('/',(request, response) =>{
    console.log(request.body.age)
    response.json({title:`HALLO ${request.query.name}`})
})

app.listen(3000,() => {
    console.log('Server berjalan di port 3000')
})