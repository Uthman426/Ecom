const shoppers = require('../modules/user')

const createshoppers = async (req,res)=>{
    console.log(body)
    try {
        const response= await shoppers.create({...req.body})
        res.send(response)
        
    } catch (error) {
        console.log("creating shopper error")
        
    }
}
module.exports={
    createshoppers
}