const BaseService = require("../core/baseService");
const Customer = require("../models/customerModel");

class CustomerService extends BaseService {
    constructor() {
        super(Customer);
    }

    async create(data) {
        try {
            return await super.create(data);
        } catch (error) {
            throw error;
        }
    }

    async getActiveAllCustomers(){
        const options = {
            where: {
                active: true 
            },
            order: [['createdAt', 'DESC']], 
        };
        try {
            return await this.findAll(options)
        } catch (error) {
            throw error;
        }
    }

    async findByID(id) {
        try {
            return await this.findByPk(id);
        } catch (error) {
            throw error;
        }
    }

    async deleteCustomer(id) {
        try {
            return await this.delete(id)
        } catch (error) {
            throw error;
        }
    }

    // Aktif müşterileri getir
    async getActiveCustomers() {
        try {
            return await this.findAll({
                where: { active: true }
            });
        } catch (error) {
            throw error;
        }
    }

    // Müşteriyi aktif/pasif yap
    async toggleActive(id) {
        try {
            const customer = await this.findByPk(id);
            if (!customer) {
                throw new Error('Customer not found');
            }
            return await this.update(id, { active: !customer.active });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CustomerService();
