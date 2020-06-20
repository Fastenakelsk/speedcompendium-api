const promiseResponseHelper = (req, res, promise) => {
  promise
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(500).send(error));
};

module.exports = {
  promiseResponseHelper
};
