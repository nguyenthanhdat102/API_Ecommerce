const respond = function (
   res,
   status,
   message = null,
   error = null,
   data = null
) {
   const timestamps = new Date().toISOString();
   return res.status(status).json({
      status,
      message,
      error,
      data,
      timestamps,
   });
};

module.exports = respond;
