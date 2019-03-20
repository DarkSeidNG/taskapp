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

What's going on?
-
The app controllers are in the controllers directory in API > v1, 
and there are three controllers in that directory.

**QuestionController.php** - This controller handles one api call
 `/api/v1/questions` (Returns a json object containing all questions stored in the database) 
 
 **TaskController.php** - This controller handles four major api calls
 * `api/v1/tasks/new` - create new tasks
 * `api/v1/tasks/{task}` - Retrieve a task it accepts a parameter (task) which represents the task_key
 * `api/v1/tasks/complete/{taskKey}` - Set the task status to completed , signaling that the said task is complete
 * `api/v1/tasks/userAnswers/{taskKey}` - Retrieve the questions and answers provided for a particular task
 
 **UserAnswerController.php** - This controller handles one api call 
 * `api/v1/tasks/question/answer` - Store users answer
 
The api endpoints are in the api.php route in the routes directory

The Models are in the app > Models directory and the following models exist
* Question.php - The questions
* QuestionOption.php - The option for multi-choice questions
* RealAnswer.php - The real answer for a multi-choice question
* Task.php - A single task created for an inividual
* TaskQuestion.php - The questions added to a particular task
* UserAnswer.php - The answer to a TaskQuestion provided by the user

The ReactJs files are located in the resources > js directory and the directory structure is as follows
* api - contains a Services directory that contains two api helpers 
  * Questions.js - for performing calls to the questions endpoint
  * Tasks.js - for performing calls to the tasks endpoint
* components - This directory contains all the reusable components that pages in the app uses
* defaults - This directory contains a single file `App.js` and this file is the default parent of the app and is where the apps js routtes are defined
* pages - this directory contains the apps web pages
    * CreateTaskPage - the page for creating tasks (url - /task)
    * HomePage - the landing page (url - /)
    * QuestionsPage - the page where the user solves the challenges (url - /tasks/{api_key}/questions)
    * TaskCompletePage - the page displayed after the task is completed (url - /tasks/{api_key}/complete)
    * TaskInstructionsPage - the page the user lands on when they click on the start challenge button in the mail sent (url - /tasks/{api_key})
    
## Author
* **[Ifeanyi Orji](ifeanyicorji@gmail.com)**
