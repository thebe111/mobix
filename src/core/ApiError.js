class ApiError extends Error {
   constructor(msg) {
      super(msg);
   }
}


module.exports = ApiError;
