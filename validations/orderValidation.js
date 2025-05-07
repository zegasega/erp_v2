const Joi = require('joi');

const orderValidation = {
    create: Joi.object({
        customer_id: Joi.number().integer().required().messages({
            'number.base': 'Müşteri ID bir sayı olmalıdır',
            'number.integer': 'Müşteri ID tam sayı olmalıdır',
            'any.required': 'Müşteri ID zorunludur'
        }),
        order_date: Joi.date().required().messages({
            'date.base': 'Geçerli bir tarih girilmelidir',
            'any.required': 'Sipariş tarihi zorunludur'
        }),
        total_amount: Joi.number().precision(2).min(0).required().messages({
            'number.base': 'Toplam tutar bir sayı olmalıdır',
            'number.min': 'Toplam tutar 0\'dan küçük olamaz',
            'any.required': 'Toplam tutar zorunludur'
        }),
        status: Joi.string().max(50).valid('Hazırlanıyor', 'Gönderildi', 'Tamamlandı', 'İptal Edildi').default('Hazırlanıyor').messages({
            'string.max': 'Durum en fazla 50 karakter olabilir',
            'any.only': 'Geçersiz sipariş durumu'
        })
    }),

    update: Joi.object({
        customer_id: Joi.number().integer().messages({
            'number.base': 'Müşteri ID bir sayı olmalıdır',
            'number.integer': 'Müşteri ID tam sayı olmalıdır'
        }),
        order_date: Joi.date().messages({
            'date.base': 'Geçerli bir tarih girilmelidir'
        }),
        total_amount: Joi.number().precision(2).min(0).messages({
            'number.base': 'Toplam tutar bir sayı olmalıdır',
            'number.min': 'Toplam tutar 0\'dan küçük olamaz'
        }),
        status: Joi.string().max(50).valid('Hazırlanıyor', 'Gönderildi', 'Tamamlandı', 'İptal Edildi').messages({
            'string.max': 'Durum en fazla 50 karakter olabilir',
            'any.only': 'Geçersiz sipariş durumu'
        })
    }),

    id: Joi.object({
        id: Joi.number().integer().required().messages({
            'number.base': 'ID bir sayı olmalıdır',
            'number.integer': 'ID tam sayı olmalıdır',
            'any.required': 'ID zorunludur'
        })
    })
};

module.exports = orderValidation; 