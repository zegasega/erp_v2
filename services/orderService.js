const BaseService = require('../core/BaseService');
const Order = require('../models/orderModel');

class OrderService extends BaseService {
    constructor() {
        super(Order);
    }

    async createOrder(data) {
        try {
            const order = await this.model.create(data);
            return order;
        } catch (error) {
            throw error;
        }
    }

    async getOrderById(id) {
        try {
            const order = await this.model.findByPk(id, {
                include: ['Customer']
            });
            if (!order) {
                throw new Error('Sipariş bulunamadı');
            }
            return order;
        } catch (error) {
            throw error;
        }
    }

    async getAllOrders() {
        try {
            const orders = await this.model.findAll({
                include: ['Customer']
            });
            return orders;
        } catch (error) {
            throw error;
        }
    }

    async updateOrder(id, data) {
        try {
            const order = await this.getOrderById(id);
            await order.update(data);
            return order;
        } catch (error) {
            throw error;
        }
    }

    async deleteOrder(id) {
        try {
            const order = await this.getOrderById(id);
            await order.destroy();
            return { message: 'Sipariş başarıyla silindi' };
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new OrderService(); 