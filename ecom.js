const shoppers=require('./router/user')
const express =require('express')
const app =express()
const {connectdb}=require('./db_connections/dbconnect')
const path = require('path')
const bodyparser =require('body-parser')



app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use('/shoppers',shoppers)

app.use('/',express.static(path.join(__dirname,'public')))
const url="mongodb+srv://uthmanolaleke:Q46G7kltmdOBx4ga@firstwork.odqdn.mongodb.net/?retryWrites=true&w=majority&appName=firstwork"
const startServer =async ()=>{
    try{
        await connectdb(url,()=>{
            console.log("connected to database")
        })
        app.listen(7000,console.log("your server is live"))
    }
    catch(error){
        console.log("error at connection string")
    }
}
startServer()