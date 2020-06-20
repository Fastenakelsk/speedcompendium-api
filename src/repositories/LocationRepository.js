const BaseRepository = require('./BaseRepository');
const Location = require('../models/Location');

class LocationRepository extends BaseRepository {
  constructor() {
    super(Location);
  }
}

module.exports = LocationRepository;
