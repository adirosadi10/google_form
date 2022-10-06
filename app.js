import express from 'express';

const app = express()

app.get('/',(request, response) =>{
   // console.log(request.query.name)
    response.json({title:`HALLO ${request.query.name}`})
})

app.listen(3000,() => {
    console.log('Server berjalan di port 3000')
})