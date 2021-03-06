# WebClockApplication

## Description
Website aims to create a platform that  users can use to manage and track their time. There are two main functions that users can use.

- Chronometer Functionality : Users can create multiple stopwatch blocks under a specific name and use already defined stopwatches. These blocks work independently from each other. Stopped chronometers can also be deleted with one button

- Countdown Functionality : Users can create a block under a title by entering the hour, minute and second they want to count down. By giving these blocks different names, they can create more than one countdown at the same time. In this way, the countdowns will continue independently from each other until they reach 0 after they are started.

- mockapi.io used for generating mock up data. Endpoints of mockapi.io used with axios library

## Instructions to Run Program
1. Clone the git repository in the link [Github Repo](https://github.com/ozanozbirecikli/WebClockApplication.git)
2. Run npm install command to install npm modules used in the project
3. Run npm start command to start the project
4. Home page will appear on the screen

## Usage Scenarios

### 1. Login or Sign Up ###
User should enter email and password and click login button to enter the main page. If user doesn't have account , new user account can be created by clicking Create Account button.

<img width="1548" alt="Login Page" src="https://user-images.githubusercontent.com/23231263/117544092-5ff4ef00-b028-11eb-813a-93999a46661c.png">

To create a new account, user should enter name, surname, email, and password. Passwords should match each other. Otherwise , system will rise an error.

<img width="1548" alt="Sign Up page" src="https://user-images.githubusercontent.com/23231263/117544161-b82bf100-b028-11eb-86d6-b91bf081e71c.png">

### 2. Main Page
User can click chronometer and countdown images on the screen. The images linked to related pages.

![image](https://user-images.githubusercontent.com/41952823/121785949-8b3da180-cbc5-11eb-9301-c81a96fe6f2f.png)

### 3. Countdown Page ###

User should fill  name, hour, minute and second areas dependent on their needs. hour, minute and seconds fields only accept integers. Otherwise, system will rise an error

![image](https://user-images.githubusercontent.com/41952823/121785765-6432a000-cbc4-11eb-808d-bfd38b1e1d56.png)

Then, User should click add countdown button, and countdown will start. If needed user can delete block by clicking delete button near to the block

Users can also create example countdowns with already defined values.

![image](https://user-images.githubusercontent.com/41952823/121785777-757bac80-cbc4-11eb-8790-a8e098c37807.png)

### 4. Chronometer Page ###

Users should fill in the name of the chronometer to their needs. If the name is empty alert dialog will be shown to the user which states that an empty string is not allowed for the chronometer name.

Default example chronometers can also be used.

User can delete all the stopped chronometers with "Delete Stopped Chronometers" button.

![image](https://user-images.githubusercontent.com/41952823/121785694-f1c1c000-cbc3-11eb-9e89-a9caa76e0d5c.png)

After users create chronometers each chronometer can be stopped, reset and deleted. Each chronometer works asyncronously and functions can be used seperately.

![image](https://user-images.githubusercontent.com/41952823/121785737-3fd6c380-cbc4-11eb-8913-a5f0d082d4d3.png)



## Used Additional Libraries

* React
* React-router
* React-bootstrap
* Axios

## Responsibilities
* Utku ??zbudak : Developing login & signup page
* Onur Eker : Developing Countdown page and functionality
* Ozan ??zbirecikli : Developing Chronometer page and functionality
* Batuhan Sesli : Developing main page and documentation

## Contributors
The project was made within the scope of ??zye??in University CS391 web development course with the contributions of the four people listed below.
* Utku ??zbudak : Senior CS Student
* Onur Eker : : Senior CS Student
* Ozan ??zbirecikli : Senior CS Student
* Batuhan Sesli : Senior EE Student & CS Minor
