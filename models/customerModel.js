const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { Hooks } = require('sequelize/lib/hooks');
const { hashPassword } = require('../utils/utils');

const Customer = sequelize.define('Customer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    country: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    credit_limit: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.00,
        allowNull: false
    },
    customer_type: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'Bireysel'
    },
    status: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'Aktif'
    }
    
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'customers',
    hooks: {
        afterCreate: async (customer, options) => {
            await sendEmail(customer.email, 'New Customer', 'Welcome');
        },
        beforeCreate: async (customer, options) => {
            customer.password = await hashPassword(customer.password);
        }
    }
});

const sendEmail = async (to, subject, TEXT) => {}

module.exports = Customer; 