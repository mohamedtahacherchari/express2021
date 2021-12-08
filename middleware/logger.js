const date = new Date()
const day =date.getDay()
const hour=date.getHours()

const logger=(req,res,next)=>{
    if(day>5 || hour<9 || hour>17){
        res.send('<h1 style="text-align:center"> Closed</h1>')
    }
    next()
}
module.exports=logger