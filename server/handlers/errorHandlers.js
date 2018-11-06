/*
  Catch Errors Handler
    Catch any errors on async/await functions and send them to the express middleware
*/
exports.catchErrors = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

exports.handleIt = (req, res, next) => {};
