# personalboilerplate
Minimal Boilerplate for personal use to jumpstart local Webdevelopment.
Just run "vagrant up" and start coding!

##Aim
My aim was to create a light environment to avoid some setup an get to coding almost immediately. Hopefulyy I made it obvious which files can be deployed, and which files should stay on your machine.

### What to deploy
Just deploy or upload everything under "/htdocs" and keep all files in "./" and "/src" on your machine. These files should not get uploaded to a running server. (They could, but it's best, to keep your live-directory clean.)

## Some Specs
- vagrant
- php
- sass
- jquery

### Vagrant
A minimal Box to start a local PHP-Environment with ease. Almost a clone of https://github.com/sapienza/vagrant-php-box. Just one small modification.
Remember: You need to install "Vagrant" (https://www.vagrantup.com/) and Virtualbox (https://www.virtualbox.org/) first.

### PHP
Currently using Version 5

### SASS
Currently using Codekit (which is great, but not openSource) to compile SASS-Files.
normalize.scss is used to, eh, normalize, the CSS. (https://github.com/necolas/normalize.css)
TODO: use gulp or grunt

### jquery
Get jQuery from Google, because for local development it's the easiest way to get started. The file get's loaded in modules/framework/javascript.php, so you can change this here.
