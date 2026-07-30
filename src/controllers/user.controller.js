import { asyncHandler } from "../utils/asyncHandler.js";

//asyncHandler is a helper function which handles the request
const registerUser = asyncHandler( async (req, res)=>{
    res.status(200).json({
        message:"successful"
    })
})


export {registerUser}