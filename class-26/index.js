const express = require('express')
const { connect_to_database } = require('./mongodb')
const { Users_Schema } = require('./models/Users_Model')
const { User_Profile_Schema } = require('./models/User_Profile')

const app = express()


app.use(express.json())


app.get('/todos', (req, res)=>{

   return res.status(200).json({message:'Todos get route!', data: []})
})


app.post('/user', async (req, res)=>{
    const body =  req.body

    try {
       const create_user = await Users_Schema.create({
            ...body
         })


        const create_profile = await User_Profile_Schema.create({
            user_id:create_user._id,
            city:'Karachi',
            country:'Pakistan',
            address:'123 street, Karachi'

        })

       return res.status(200).json({message:'User has been created!'})
       
        
    } catch (error) {
        return res.status(500).json({message:'Something went wrong!', error})
    }

     
})

connect_to_database()


app.listen(5000, ()=>{
    console.log('Server is listening at: 5000')
})

