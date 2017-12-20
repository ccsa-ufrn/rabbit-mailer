'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Email = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * CCSA - UFRN, 2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _amqplib = require('amqplib');

var _amqplib2 = _interopRequireDefault(_amqplib);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Constant default connection options used when is not defined one.
 * See ampqlib connect doc: http://www.squaremobius.net/amqp.node/channel_api.html#connect
 */
var DEFAULT_CONN_OPTIONS = {
    protocol: 'amqp',
    hostname: 'localhost',
    port: 5672,
    username: 'guest',
    password: 'guest',
    locale: 'en_US',
    frameMax: 0,
    heartbeat: 0,
    vhost: '/'
};

/**
 * Constant default email template
 * See NodeMailer doc: https://nodemailer.com/message/
 */
var DEFAULT_EMAIL_CONTENT = {
    from: null,
    to: null,
    subject: null,
    text: null,
    html: null

    /**
     * Email class. Used to design a email to deliver with Rabbit Mailer
     */
};
var Email = exports.Email = function () {
    function Email() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_EMAIL_CONTENT;

        _classCallCheck(this, Email);

        this.content = Object.assign(DEFAULT_EMAIL_CONTENT, options);
    }

    _createClass(Email, [{
        key: 'setFrom',
        value: function setFrom(from) {
            this.content.from = from;
        }
    }, {
        key: 'setTo',
        value: function setTo(to) {
            this.content.to = to;
        }
    }, {
        key: 'setSubject',
        value: function setSubject(subject) {
            this.content.subject = subject;
        }
    }, {
        key: 'setText',
        value: function setText(text) {
            this.content.text = text;
        }
    }, {
        key: 'setHtml',
        value: function setHtml(html) {
            this.content.html = html;
        }
    }, {
        key: 'getEmail',
        value: function getEmail() {
            return Object.assign({}, this.content);
        }
    }]);

    return Email;
}();

/**
 * Default Rabbit Mailer class. Manages connections operations and send emails
 */


var RabbitMailer = function () {
    function RabbitMailer() {
        _classCallCheck(this, RabbitMailer);
    }

    _createClass(RabbitMailer, null, [{
        key: 'open',

        /**
         * Opens a connection to a queue channel
         * @param options connections params (host, port, queue...) according to AMQPlib documentation
         */
        value: function open() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_CONN_OPTIONS;

            var mergedOptions = Object.assign(DEFAULT_CONN_OPTIONS, options);

            return new _bluebird2.default(function (resolve, reject) {
                _amqplib2.default.connect(mergedOptions).then(function (connection) {
                    resolve(connection);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * Opens a connection, send a email and then close the connection
         * @param email email object generated from Email 
         * @param options connection options 
         */

    }, {
        key: 'send',
        value: function send(email, queue) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_CONN_OPTIONS;

            this.open(options).then(function (connection) {
                connection.createChannel(function (error, channel) {
                    if (err) doSomething();
                    channel.assertQueue(queue);
                    channel.sendToQueue(queue, new Buffer(JSON.stringify(email.content)));
                    console.log("did");
                });
            }).catch(function (error) {
                console.log("error");
            });
        }
    }]);

    return RabbitMailer;
}();

exports.default = RabbitMailer;