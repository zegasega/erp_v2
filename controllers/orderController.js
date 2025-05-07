const orderService = require('../services/orderService');

class OrderController {
    async createOrder(req, res) {
        try {
            const order = await orderService.createOrder(req.body);
            res.status(201).json({
                success: true,
                data: order
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    async getOrderById(req, res) {
        try {
            const order = await orderService.getOrderById(req.params.id);
            res.status(200).json({
                success: true,
                data: order
            });
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            });
        }
    }

    async getAllOrders(req, res) {
        try {
            const orders = await orderService.getAllOrders();
            res.status(200).json({
                success: true,
                data: orders
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

    async updateOrder(req, res) {
        try {
            const order = await orderService.updateOrder(req.params.id, req.body);
            res.status(200).json({
                success: true,
                data: order
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    async deleteOrder(req, res) {
        try {
            const result = await orderService.deleteOrder(req.params.id);
            res.status(200).json({
                success: true,
                ...result
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }
}

module.exports = new OrderController();
