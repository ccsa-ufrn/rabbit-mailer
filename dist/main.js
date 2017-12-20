'use strict';

var _RabbitMailer = require('./RabbitMailer');

var _RabbitMailer2 = _interopRequireDefault(_RabbitMailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rabbit = new _RabbitMailer2.default(); /**
                                            * CCSA - UFRN, 2017.
                                            */

try {
  rabbit.open();
} catch (err) {}