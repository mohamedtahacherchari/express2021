const express=require('express')
 const logger=require('./middleware/logger')
const app=express()

app.use(logger)
app.use(express.static(__dirname+'/public'))
console.log(__dirname+'/public')



const PORT =4501

app.listen(PORT,(err)=>err? console.error(err): console.log(`app listening on port : ${PORT}`))
