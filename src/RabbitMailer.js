/**
 * CCSA - UFRN, 2017.
 */

import AMQP from 'amqplib';
import Promise from 'bluebird';

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

/**
 * Constant default email template
 * See NodeMailer doc: https://nodemailer.com/message/
 */
const DEFAULT_EMAIL_CONTENT = {
    from: null,
    to: null,
    subject: null,
    text: null,
    html: null
}

/**
 * Email class. Used to design a email to deliver with Rabbit Mailer
 */
export class Email {
    constructor(options = DEFAULT_EMAIL_CONTENT) {
        this.content = Object.assign(DEFAULT_EMAIL_CONTENT, options);
    }

    setFrom(from) {
        this.content.from = from;
    }

    setTo(to) {
        this.content.to = to;
    }

    setSubject(subject) {
        this.content.subject = subject;
    }

    setText(text) {
        this.content.text = text;
    }

    setHtml(html) {
        this.content.html = html;
    }

    getEmail() {
        return Object.assign({}, this.content);
    }
}

/**
 * Default Rabbit Mailer class. Manages connections operations and send emails
 */
export default class RabbitMailer {
    /**
     * Opens a connection to a queue channel
     * @param options connections params (host, port, queue...) according to AMQPlib documentation
     */
    static open(options = DEFAULT_CONN_OPTIONS) {
        const mergedOptions = Object.assign(DEFAULT_CONN_OPTIONS, options);

        return new Promise((resolve, reject) => {
            AMQP.connect(mergedOptions)
            .then((connection) => {
                resolve(connection);
            })
            .catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * Opens a connection, send a email and then close the connection
     * @param email email object generated from Email 
     * @param options connection options 
     */
    static send(email, queue, options = DEFAULT_CONN_OPTIONS) {
        this.open(options)
        .then((connection) => {
            connection.createChannel((error, channel) => {
                if (err) doSomething();
                channel.assertQueue(queue);
                channel.sendToQueue(queue, new Buffer(JSON.stringify(email.content)));
                console.log("did");
            });
        })
        .catch((error) => {
            console.log("error");
        });
    }
}