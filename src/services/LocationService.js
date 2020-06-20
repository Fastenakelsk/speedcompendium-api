const { LocationRepository } = require('../repositories/index');

class LocationService {
  async create(location) {
    return await LocationRepository.create(location);
  }

  async readAll() {
    return await LocationRepository.readAll();
  }

  async read(objectId) {
    return await LocationRepository.read(objectId);
  }

  async update(objectId, data) {
    return await LocationRepository.update(objectId, data);
  }

  async delete(objectId) {
    return await LocationRepository.delete(objectId);
  }
}

module.exports = LocationService;
