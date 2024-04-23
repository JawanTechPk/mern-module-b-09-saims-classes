const { Users_Schema } = require("../models/Users_Model")

const response_controller = async (req, res) => {

    try {
        
        // const user_id = req.params.id
        
        // const find_user = await Users_Schema.findById(user_id)
        
        // if (find_user === null) {
            //     return res.json({ success: false, message: 'Invalid user id!' })
            // }
            
            
            const user = req.user

      return  res.json({success:true, data:user})
        
    } catch (error) {
        
    }

    
}


module.exports = {response_controller}