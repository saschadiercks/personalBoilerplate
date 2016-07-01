# personalboilerplate
if your'e interested in using docker only in favor of vagrant, please visit: https://github.com/saschadiercks/dockerBox

Minimal Boilerplate for personal use to jumpstart local Webdevelopment.
Just run `vagrant up` or `docker-compose up` and start coding!

##Aim
My aim was to create a light environment to avoid some setup an get to coding almost immediately. Hopefulyy I made it obvious which files can be deployed, and which files should stay on your machine.

### What to deploy
Just deploy or upload everything under "/htdocs" and keep all files in "./" and "/src" on your machine. These files should not get uploaded to a running server. (They could, but it's best, to keep your live-directory clean.)

## Some Specs
- vagrant (modified fork of: https://github.com/sapienza/vagrant-php-box)
- docker (modified fork of: https://github.com/saada/docker-compose-php-mysql)
- php
- sass
- jquery
- compiling on the fly using grunt

### Docker: Usage (*preferred)
1. install docker on your machine (https://www.docker.com/products/docker)
2. install Virtualbox (https://www.virtualbox.org/wiki/Downloads)
3. run `docker-compose up`
4. visit (http://127.0.0.1:8080/)

### Vagrant: Usage
1. install vagrant on your machine (https://www.vagrantup.com/)
2. install Virtualbox (https://www.virtualbox.org/wiki/Downloads)
3. clone this repository
4. Enter `vagrant up`
5. Wait a while until all components are loaded an the box is running. (The first start can take a while)
6. visit (http://127.0.0.1:8080/)

### Grunt: Usage
SASS is compiled using grunt. (http://gruntjs.com/)
1. Make sure, you have node.js installed on your computer (https://nodejs.org/en/)
2. run `npm install -g grunt-cli` to install grunt
3. run `npm install` to use grunt in your project
4. run `grunt watch` to compile SASS on the fly

### jquery
Get jQuery from Google, because for local development it's the easiest way to get started. The file get's loaded in modules/framework/javascript.php, so you can change this here.

## TODO
- prefer .php-files instead of .html-files in vagrant-version
