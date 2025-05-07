const customerService = require('../services/customerService');

class CustomerController {

    // get user by email
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


    // Tüm müşterileri getir
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

    // Aktif müşterileri getir
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

    // ID'ye göre müşteri getir
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

    // Yeni müşteri oluştur
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

    // Müşteri güncelle
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

    // Müşteri sil
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

    // Müşteriyi aktif/pasif yap
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