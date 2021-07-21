const notFound=(req,res,next)=>{
    const error=new Error(`Cannot find - ${req.originalUrl}`);
    res.status(404);
    next(error);
}


const errorHandler=(err,req,res,next)=>{
    const statusCode=(res.statusCode==200)?500:res.statusCode;
    res.status(statusCode).json({
        error:err.message,
        stack:(process.env.NODE_ENV==='DEVELOPMENT')?err.stack:null
    });
    next();
}



export(notFound,errorHandler);