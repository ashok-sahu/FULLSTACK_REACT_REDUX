require('./db');
const app = require('./server/app')

app.listen(8080,(req,res)=>{
    console.log('server is running on http://localhost:8080')
})