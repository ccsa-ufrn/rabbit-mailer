'use strict';

var _RabbitMailer = require('./RabbitMailer');

var _RabbitMailer2 = _interopRequireDefault(_RabbitMailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var email = new _RabbitMailer.Email({
    from: 'maradona.morais@hotmai',
    to: 'mrmorais@hotmail.com',
    text: 'This is awesome',
    subject: 'Woow',
    html: 'Cant read?'
}); /**
     * CCSA - UFRN, 2017.
     */

_RabbitMailer2.default.send(email, 'email');