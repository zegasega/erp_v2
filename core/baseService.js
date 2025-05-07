class BaseService {
    constructor(model) {
      this.model = model;
    }
  
    
    async create(data, options = {}) {
      try {
        return await this.model.create(data, options);
      } catch (error) {
        throw error;
      }
    }
  
   
    async findByPk(id, options = {}) {
      try {
        return await this.model.findByPk(id, options); 
      } catch (error) {
        throw error;
      }
    }

    async findAll(options = {}) {
      try {
        return await this.model.findAll(options);
      } catch (error) {
        throw error;
      }
    }
  
    
    async findOne(where = {}, options = {}) {
      try {
        return await this.model.findOne({ where, ...options });
      } catch (error) {
        throw error;
      }
    }
  

    async findById(id, options = {}) {
      try {
        return await this.model.findByPk(id, options); 
      } catch (error) {
        throw error;
      }
    }
  

    async update(id, data, options = {}) {
      try {
        const instance = await this.model.findByPk(id);
        if (!instance) {
          throw new Error(`${this.model.name} with id ${id} not found`);
        }
        return await instance.update(data, options);
      } catch (error) {
        throw error;
      }
    }
  
  
    async delete(id, options = {}) {
      try {
        const instance = await this.model.findByPk(id);
        if (!instance) {
          throw new Error(`${this.model.name} with id ${id} not found`);
        }
        await instance.destroy(options);
        return { message: `${this.model.name} deleted successfully` };
      } catch (error) {
        throw error;
      }
    }
  
  
    async softDelete(id, options = {}) {
      try {
        const instance = await this.model.findByPk(id);
        if (!instance) {
          throw new Error(`${this.model.name} with id ${id} not found`);
        }
        return await instance.update({ isDeleted: true }, options);
      } catch (error) {
        throw error;
      }
    }
  
    async query(options = {}) {
      try {
        return await this.model.findAll(options);
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = BaseService;
  