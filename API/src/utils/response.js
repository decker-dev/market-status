export const success = (req, res, message, status) => {
  const statusCode = status || 200
  const statusMessage = message || ''
  res.status(statusCode).send({
    error: false,
    statusCode,
    body: statusMessage
  })
}
export const error = (req, res, message, status) => {
  const statusCode = status || 500
  const statusMessage = message || 'Internal Server Error'
  res.status(statusCode).send({
    error: true,
    statusCode,
    body: statusMessage
  })
}
