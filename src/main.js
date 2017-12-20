/**
 * CCSA - UFRN, 2017.
 */

import RabbitMailer from './RabbitMailer';

const rabbit = new RabbitMailer();
try {
    rabbit.open();
} catch(err) {

}