import express from 'express';

const app = express()

app.get('/',(request, response) =>{
    console.log(request.query)
    response.json({title:'HALLO'})
})

app.listen(3000,() => {
    console.log('Server berjalan di port 3000')
})