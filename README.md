# Task App
Task app is a simple tasks web app, that allows employers create tasks for potential employees.

## Introduction
Easily create and send tasks to people and get them to perform the task and 

### Dependencies  
* **[ReactJS](https://reactjs.org)** - ReactJs is a simple library for building UI components
* **[Laravel](https://laravel.com)** - Laravel is a free, open-source PHP web framework for web artisans
* **[SQLite](https://www.sqlite.org)** - SQLite is a self-contained, high-reliability, embedded, full-featured, public-domain, SQL database engine. SQLite is the most used database engine in the world.
* **[MailTrap](https://mailtrap.io)** - A simple mail client that can be used to mock sending mails
### Features
<ul>
<li>Create and assign tasks to people</li>
<li>Receive challenge via email</li>
<li>Perform challenge</li>
<li>Answers sent to admin mail</li>
</ul>

### Tools Used
- Intellij IDEA - IDE
- Laravel - Framework
- SQL - Persistence
- Git - Version Control
- Heroku - Staging Server

## Getting started with the project 
* Clone the repo `git clone https://github.com/DarkSeidNG/taskapp.git`
* Navigate to the `taskapp` directory
* Run `composer install` to install laravel dependencies
* Run `npm install` to install node dependencies
* Run `php artisan migrate:refresh` to reinitialize the database (A database.sqlite database has been added to the database directory)
* Run `php artisan db:seed` to add demo questions to the database

Directory Structure
-
![Directory Structure](/structure.png?raw=true "Directory Structure")

Trying the app out
-
To view a sample of the app visit `https://afternoon-caverns-70290.herokuapp.com/` then click the `Create Task` button to create a new task,
after creating the new task login to Mailtrap (https://mailtrap.io) with the login details below

email - chrisifwax101@gmail.com

password - 12345789

After logging in click on the latest mail that was sent from the app, then click on start challenge

You'll be redirected to the task instructions page from where you can start taking the challenge


## Constraints
For now the mail client used in the demo app on heroku is mailtrap and so it doesn't actually send mail to the email address entered while creating tasks, but that can be set up easily in the mail.php file in the config directory.

Tests are still being written and will continue to be written till a 100% coverage is achieved

Managing created tasks is not possible now from a GUI except by directly manipulating the database - this feature will be added in the future

The ability to go back to completed tasks to see results has not been added and will be added in the future.


## Author
* **[Ifeanyi Orji](ifeanyicorji@gmail.com)**
