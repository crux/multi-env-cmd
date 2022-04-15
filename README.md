# Ad-hoc mixing of multiple .env files into an Environment to run shell Commands in

No a big thing, just mixing up multiple .env config files into an ad-hoc enviroment to run your application in. Usually in development, not production. 

This script makes up such an env on the fly combined from three files:

```sh
$ multi-env .env.sqs.dev .env.db.local .env.saas.staging -- ./bin/app-under-development
```

Like when you have a programm which connects with two different databases, an AWS SQS queue and a external SaaS API. To run this script in dev mode you need to configure all of them, but depending on what you actually work on, you need a different set-up. In this case this are three envs combined, and possibilities multiply. Add test, staging and production and combinations go up beyond what you can handle in a single .env file. 

Frameworks like laravel support a .env file, and in testing automatically overload it automatically from .env.testing. This script is for such needs, but in a generic way. Packages like [.dotenv](https://www.npmjs.com/package/dotenv) do similar things, but for for inside a node.js app itself. This here is for the cmdline. 

All of this is guided by the idea of [12 Factors](https://12factor.net/config), go read it, if you haven't. Seriously. 

have fun
