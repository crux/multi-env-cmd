# Ad-hoc mixing of multiple .env files into an Environment to run shell Commands in

No a big thing. Mixing multiple .env config files in an ad-hoc fashion to run
application. Usually in development. Like you have an programm which connects
to two different databases, an AWS SQS queue and a external SaaS API. To run
this script in dev mode you need to configure all of them, but depending on
what you actually work on, you need a different set-up. In this case this are
four configs combined, and the possibilities multiply. Just test, staging and
production gives you 4 x 3 = 12 possible combinations. 

This script makes up and env on the fly:

```sh
$ multi-env .env.sqs.dev .env.db.dev .env.saas.staging .env.db2.staging -- ./bin/app-under-development
```


