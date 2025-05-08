const customerService = require('../services/customerService');

class CustomerController {

   
    async getCustomerByEmail(req, res) {
        try {
            
            const customer = await customerService.getCustomersWithEmailDomain(req.params.email);
            res.json({
                success: true,
                data: customer
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }


    async getAllCustomers(req, res) {
        try {
            const customers = await customerService.findAll();
            res.json({
                success: true,
                data: customers
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }


    async getActiveCustomers(req, res) {
        try {
            const customers = await customerService.getActiveCustomers();
            res.json({
                success: true,
                data: customers
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }


    async getCustomerById(req, res) {
        try {
            const customer = await customerService.findByID(req.params.id);
            if (!customer) {
                return res.status(404).json({
                    success: false,
                    message: 'Customer not found'
                });
            }
            res.json({
                success: true,
                data: customer
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

 
    async createCustomer(req, res) {
        try {
            const customer = await customerService.create(req.body);
            res.status(201).json({
                success: true,
                data: customer
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }


    async updateCustomer(req, res) {
        try {
            const customer = await customerService.update(req.params.id, req.body);
            if (!customer) {
                return res.status(404).json({
                    success: false,
                    message: 'Customer not found'
                });
            }
            res.json({
                success: true,
                data: customer
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

  
    async deleteCustomer(req, res) {
        try {
            const result = await customerService.deleteCustomer(req.params.id);
            res.json({
                success: true,
                message: 'Customer deleted successfully'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }


    async toggleCustomerActive(req, res) {
        try {
            const customer = await customerService.toggleActive(req.params.id);
            res.json({
                success: true,
                data: customer
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}

module.exports = new CustomerController(); 