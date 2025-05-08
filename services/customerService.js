const BaseService = require("../core/baseService");
const Customer = require("../models/customerModel");
const { Op, where } = require("sequelize");

class CustomerService extends BaseService {
    constructor() {
        super(Customer);
    }

    async customQuery() {
        const options = {
          where: {
            country: 'Türkiye',
            is_active: true,
            credit_limit: {
                [Op.gt]: 100
              }
            
          }
        };
      
        try {
          const customers = await this.findAll(options);
          return customers; 
        } catch (error) {
          console.error('Hata:', error);
          throw error; 
        }
      }
      

      async getCustomerByEmail(email) {
        try {
            const customer = await this.findOne({ where: { email } }); // Email'i doğru şekilde kullanıyoruz
            return customer; // Customer'ı döndürüyoruz
        } catch (error) {
            console.log("Error", error);
            throw error; // Hata durumunda tekrar fırlatıyoruz
        }
    }

    async getCustomersWithEmailDomain(domain) {
        const options = {
            where: {
                email: {
                    [Op.like]: `%@${domain}` // emaile gore filtreleme yapıyoruz
                },
                active: true
            },
            order: [['createdAt', 'DESC']]
        };
        try {
            return await this.findAll(options);
        } catch (error) {
            throw error;
        }
    }
    
    
    // async create(data) {
    //     try {
    //         return await super.create(data);
    //     } catch (error) {
    //         throw error;
    //     }
    // }

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

    async getActiveCustomers() {
        try {
            return await this.findAll({
                where: { active: true }
            });
        } catch (error) {
            throw error;
        }
    }

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
