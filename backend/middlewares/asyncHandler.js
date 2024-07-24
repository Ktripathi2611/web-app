const  asyncHandler=(fn)=>async(req,res,next)=>
    fn(req,res,next).catch(Error=>{
        res.status(500).json({message:Error.message})
    })
    export default asyncHandler
    