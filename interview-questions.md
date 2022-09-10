# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: I have ran into this problem myself while working on a database. We can fix this issue simply by migrating a column called student_id into the cohort database. This will allow the student primary key to be associated in the cohort database as a foreign key and link them as a relational database. 

Researched answer: After researching I found we can either add student_id into the Cohort database or add cohort_id into the Student database. This will allow the primary key from either database to be passed as a foreign key into the other database and make them a relational database. Here are some examples;

    In terminal;
   $ rails g migration add_column_student_id
   $ rails g model Student first_name:string last_name:string student_id:integer
   $ rails db:migrate
    
    In terminal; 
   $ rails g migration add_column_cohort_id
   $ rails g model Cohort cohort_name:string cohort_year:integer cohort_id:integer
   $ rails db:migrate


2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes that must always be passed params are destroy, edit, show and update because when you are utilizing those params they must know what they are being asked to be used on. Without specifing, the RESTful route won't know what it is working on. 

Researched answer: The RESTful routes that must always be passed params are destroy, edit, show and update because when you are utilizing those params they must know what they are being asked to be used on. Without specifing, the RESTful route won't know what its working on. Developers also need to be concerned with the path and query as well. The path follows the domain name and should be used to help identify the server resource that the developer is looking to access.

3. Name three rails generator commands. What is created by each?

Your answer: The most impactful generator command that comes to mind is $rails generate resource. This will generate routes, columns,  and a folder in views. Another important generator command is $rails generate controller. The controller is the brains of the application. The third generator command that comes to mind is $ rails generate model. The model will create migration, model and tests for generated files. The model essesntially creates the database structure. 

Researched answer: The most impactful generator command that comes to mind is $rails generate resource. This will generate routes, columns, assign forgeign keys and a folder in views. Another important generator command is $rails generate controller. The controller does not need us to put column names or types. The controller is the brains of the application. The third generator command that comes to mind is $ rails generate model. The model will create migration and tests for generated files. The model creates the database structure.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
The index method called on that would list all of the students. 

action: "POST" location: /students
A new student can be added to the list with this create method.

action: "GET" location: /students/new
A form to add a new student would be produced from this new method.

action: "GET" location: /students/2
The student with id2 would be called on with the show method. 

action: "GET" location: /students/2/edit
An edit form for student with id2 from the edit method. 

action: "PATCH" location: /students/2
The update method that are the changes posted after an edit. 

action: "DELETE" location: /students/2
The destroy method that would delete the student with id2.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

- As a developer, I want to create a new application called My To Do List
- As a developer, My To Do List will have a login and password
- As a developer, My To Do List will have a task, description, due by and status of need to complete or completed.
- As a developer, I can add tasks into the database.
- As a user, I can see the tasks in the home page of the application.
- As a user, I can click on a task and go to the page with that task as title, a description and the status of due by, need to complete or completed.
- As a user I can navigate back to the home page
- As a user, I can create a new task
- As a user, I can edit a task
- As a user, I can delete a task
