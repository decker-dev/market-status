export const success = (req, res,message,status) => {
    let statusCode = status || 200
    let statusMessage= message || ''
    res.status(statusCode).send({
        error:false,
        statusCode,
        body:statusMessage
    })
}
export const error = (req, res,message,status) => {
    let statusCode= status || 500
    let statusMessage= message || 'Internal Server Error'
    res.status(statusCode).send({
        error:true,
        statusCode,
        body:statusMessage
    })
}
