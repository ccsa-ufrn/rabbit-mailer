/**
 * CCSA - UFRN, 2017.
 */

import AMQP from 'amqplib';

/**
 * Constant default connection options used when is not defined one.
 * See ampqlib connect doc: http://www.squaremobius.net/amqp.node/channel_api.html#connect
 */
const DEFAULT_CONN_OPTIONS = {
    protocol: 'amqp',
    hostname: 'localhost',
    port: 5672,
    username: 'guest',
    password: 'guest',
    locale: 'en_US',
    frameMax: 0,
    heartbeat: 0,
    vhost: '/',
};

export default class RabbitMailer {
    /**
     * Sets a initial connection as null
     */
    constructor() {
        this.connection = null;
    }

    /**
     * Opens a connection to a queue channel
     * @param options connections params (host, port, queue...) according to AMQPlib documentation
     */
    open(conn_options = DEFAULT_CONN_OPTIONS) {
        const mergedOptions = Object.assign(DEFAULT_CONN_OPTIONS, conn_options);
        AMQP.connect(mergedOptions, (err, conn) => {
            // if (err) throw new Error(err);
            this.connection = conn;
        });
    }
}