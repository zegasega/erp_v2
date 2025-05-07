const Joi = require('joi');

const customerValidation = {
    create: Joi.object({
        name: Joi.string()
            .required()
            .min(2)
            .max(255)
            .messages({
                'string.empty': 'İsim alanı boş olamaz',
                'string.min': 'İsim en az 2 karakter olmalıdır',
                'string.max': 'İsim en fazla 255 karakter olabilir',
                'any.required': 'İsim alanı zorunludur'
            }),
        email: Joi.string()
            .email()
            .required()
            .max(255)
            .messages({
                'string.email': 'Geçerli bir email adresi giriniz',
                'string.empty': 'Email alanı boş olamaz',
                'string.max': 'Email en fazla 255 karakter olabilir',
                'any.required': 'Email alanı zorunludur'
            }),
        phone: Joi.string()
            .pattern(/^[0-9+\-\s()]*$/)
            .max(15)
            .allow('', null)
            .messages({
                'string.pattern.base': 'Geçerli bir telefon numarası giriniz',
                'string.max': 'Telefon numarası en fazla 15 karakter olabilir'
            }),
        address: Joi.string()
            .allow('', null),
        city: Joi.string()
            .max(100)
            .allow('', null)
            .messages({
                'string.max': 'Şehir adı en fazla 100 karakter olabilir'
            }),
        country: Joi.string()
            .max(100)
            .allow('', null)
            .messages({
                'string.max': 'Ülke adı en fazla 100 karakter olabilir'
            }),
        is_active: Joi.boolean()
            .default(true),
        credit_limit: Joi.number()
            .precision(2)
            .min(0)
            .default(0.00)
            .messages({
                'number.base': 'Kredi limiti sayısal bir değer olmalıdır',
                'number.min': 'Kredi limiti 0\'dan küçük olamaz'
            }),
        customer_type: Joi.string()
            .valid('Bireysel', 'Şirket', 'Kurumsal')
            .default('Bireysel')
            .messages({
                'any.only': 'Müşteri tipi geçerli bir değer olmalıdır (Bireysel, Şirket, Kurumsal)'
            }),
        status: Joi.string()
            .valid('Aktif', 'Pasif', 'Beklemede', 'İptal')
            .default('Aktif')
            .messages({
                'any.only': 'Durum geçerli bir değer olmalıdır (Aktif, Pasif, Beklemede, İptal)'
            })
    }),

    update: Joi.object({
        name: Joi.string()
            .min(2)
            .max(255)
            .messages({
                'string.min': 'İsim en az 2 karakter olmalıdır',
                'string.max': 'İsim en fazla 255 karakter olabilir'
            }),
        email: Joi.string()
            .email()
            .max(255)
            .messages({
                'string.email': 'Geçerli bir email adresi giriniz',
                'string.max': 'Email en fazla 255 karakter olabilir'
            }),
        phone: Joi.string()
            .pattern(/^[0-9+\-\s()]*$/)
            .max(15)
            .allow('', null)
            .messages({
                'string.pattern.base': 'Geçerli bir telefon numarası giriniz',
                'string.max': 'Telefon numarası en fazla 15 karakter olabilir'
            }),
        address: Joi.string()
            .allow('', null),
        city: Joi.string()
            .max(100)
            .allow('', null)
            .messages({
                'string.max': 'Şehir adı en fazla 100 karakter olabilir'
            }),
        country: Joi.string()
            .max(100)
            .allow('', null)
            .messages({
                'string.max': 'Ülke adı en fazla 100 karakter olabilir'
            }),
        is_active: Joi.boolean(),
        credit_limit: Joi.number()
            .precision(2)
            .min(0)
            .messages({
                'number.base': 'Kredi limiti sayısal bir değer olmalıdır',
                'number.min': 'Kredi limiti 0\'dan küçük olamaz'
            }),
        customer_type: Joi.string()
            .valid('Bireysel', 'Şirket', 'Kurumsal')
            .messages({
                'any.only': 'Müşteri tipi geçerli bir değer olmalıdır (Bireysel, Şirket, Kurumsal)'
            }),
        status: Joi.string()
            .valid('Aktif', 'Pasif', 'Beklemede', 'İptal')
            .messages({
                'any.only': 'Durum geçerli bir değer olmalıdır (Aktif, Pasif, Beklemede, İptal)'
            })
    })
};

module.exports = customerValidation; 