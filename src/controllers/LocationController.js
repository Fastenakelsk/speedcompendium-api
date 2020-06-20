const { LocationService } = require('../services/index');
const { promiseResponseHelper } = require('../helpers');

class LocationController {
  toLocationPayload(req) {
    return {
      area: req.body.area,
      room: req.body.room,
    };
  }

  create(req, res) {
    promiseResponseHelper(req, res, LocationService.create(this.toLocationPayload(req)));
  }

  readAll(req, res) {
    promiseResponseHelper(req, res, LocationService.readAll());
  }

  read(req, res) {
    promiseResponseHelper(req, res, LocationService.read(req.params.objectId));
  }

  update(req, res) {
    promiseResponseHelper(req, res, LocationService.update(req.params.objectId, this.toLocationPayload(req)));
  }

  delete(req, res) {
    promiseResponseHelper(req, res, LocationService.delete(req.params.objectId));
  }
}

module.exports = LocationController;
