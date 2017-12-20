/**
 * CCSA - UFRN, 2017.
 */

import RabbitMailer, { Email } from './RabbitMailer';

const email = new Email({
    from: 'maradona.morais@hotmai',
    to: 'mrmorais@hotmail.com',
    text: 'This is awesome',
    subject: 'Woow',
    html: 'Cant read?',
});

RabbitMailer.send(email, 'email');