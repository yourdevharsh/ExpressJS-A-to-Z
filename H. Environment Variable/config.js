// No mix of import & require
const dotenv = require('dotenv');

dotenev.config();

module.exports = {
  port: process.env.PORT || 3000
}