# Rabbit Mailer Client
A client to use Rabbit Mailer as mail delivering server in Node.JS apps

<img src="https://i.imgur.com/BTdctAa.png" width="250">

To use this mailer client on your project to send emails over SMTP you will need Rabbit Mailer Server (RMS) up and running with Rabbit MQ messaging service, check out how to start these services at [Rabbit Mailer Server documentation](https://github.com/ccsa-ufrn/rabbit-mailer-server).

## How it works

This client module is a bridge between your application and a running Rabbit Mailer Server. It provides methods that allows your application to create a message in the email queue managed by RabbitMQ. That message will be consumed and sent to recipient by the RMS.

## Prerequisites

The unique prerequisite is to have [Rabbit Mailer Server](https://github.com/ccsa-ufrn/rabbit-mailer-server) running, RMS has anothers prerequisites, please check the `README.md`.

## Installing

Rabbit Mailer Client (RMC) is a NPM package, so you can install it with `npm install rabbit-mailer` to your node application.

## Support to others platforms

Currently RMC is only available to Node.JS/Javascript applications, but anothers clients will be implemented soon. If you are interested in develop a client to another language please contact the mainteiner (`mrmorais at ufrn.edu.br`).

## License

Rabbit Mailer is licensed over GPLv3 [read about](https://www.gnu.org/licenses/gpl-3.0.html)
