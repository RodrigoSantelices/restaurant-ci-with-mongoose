'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://rod:Test@ds113700.mlab.com:13700/restaurant-ci';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-restaurants-app';
exports.PORT = process.env.PORT || 8080;
