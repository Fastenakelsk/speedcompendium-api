// eslint-disable-next-line no-unused-vars
class BaseRepository {
  /**
   * BaseRepository constructor
   * @param type Model type reference
   */
  constructor(type) {
    this.Model = type;
  }

  /**
   * Create a new document
   * @param data
   * @return {Promise<Object>}
   */
  async create(data) {
    const document = new this.Model(data);
    return await document.save();
  }

  /**
   * Read all documents
   * @return {Promise<Object|void>}
   */
  async readAll() {
    return this.Model.find({});
  }

  /**
   * Read a document
   * @param objectId
   * @return {Promise<Object>}
   */
  async read(objectId) {
    return await this.Model.findOne({ _id: objectId });
  }

  /**
   * Update a document
   * @param objectId
   * @param data
   * @return {Promise<Object>}
   */
  async update(objectId, data) {
    return await this.Model.updateOne({ _id: objectId }, { $set: data });
  }

  /**
   * Delete a document
   * @param objectId
   * @return {Promise<Object>}
   */
  async delete(objectId) {
    return await this.Model.deleteOne({ _id: objectId });
  }
}

module.exports = BaseRepository;
