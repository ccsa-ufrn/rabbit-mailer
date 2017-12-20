'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * CCSA - UFRN, 2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _amqplib = require('amqplib');

var _amqplib2 = _interopRequireDefault(_amqplib);

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

var RabbitMailer = function () {
    /**
     * Sets a initial connection as null
     */
    function RabbitMailer() {
        _classCallCheck(this, RabbitMailer);

        this.connection = null;
    }

    /**
     * Opens a connection to a queue channel
     * @param options connections params (host, port, queue...) according to AMQPlib documentation
     */


    _createClass(RabbitMailer, [{
        key: 'open',
        value: function open() {
            var _this = this;

            var conn_options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_CONN_OPTIONS;

            var mergedOptions = Object.assign(DEFAULT_CONN_OPTIONS, conn_options);
            _amqplib2.default.connect(mergedOptions, function (err, conn) {
                // if (err) throw new Error(err);
                _this.connection = conn;
            });
        }
    }]);

    return RabbitMailer;
}();

exports.default = RabbitMailer;