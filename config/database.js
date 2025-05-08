const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'user_db',       // Veritabanı adı
  process.env.DB_USER || 'user',          // Kullanıcı adı
  process.env.DB_PASSWORD || 'userpassword', // Kullanıcı şifresi
  {
    host: process.env.DB_HOST || 'db',    // MariaDB servisi
    dialect: 'mariadb',                   // MariaDB kullan
    logging: false,                       // Logları kapat
  }
);

module.exports = sequelize;
