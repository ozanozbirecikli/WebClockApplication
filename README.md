# WebClockApplication

## Description
Website aims to create a platform that  users can use to manage and track their time. There are two main functions that users can use.

- Chronometer Functionality : Users can create multiple stopwatch blocks under a specific name. These blocks work independently from each other.

- Countdown Functionality : Users can create a block under a title by entering the hour, minute and second they want to count down. By giving these blocks different names, they can create more than one countdown at the same time. In this way, the countdowns will continue independently from each other until they reach 0 after they are started.

## Usage Scenarios

1. ### Login or Sign Up
User should enter email and password and click login button to enter the main page. If user doesn't have account , new user account can be created by clicking Create Account button.

<img width="1548" alt="Login Page" src="https://user-images.githubusercontent.com/23231263/117544092-5ff4ef00-b028-11eb-813a-93999a46661c.png">

To create a new account, user should enter name, surname, email, and password. Passwords should match each other. Otherwise , system will rise an error.

<img width="1548" alt="Sign Up page" src="https://user-images.githubusercontent.com/23231263/117544161-b82bf100-b028-11eb-86d6-b91bf081e71c.png">

2. ### Main Page
User can click chronometer and countdown images on the screen. The images linked to related pages.

!!! Main page ss will be added !!!! 

3. ### Countdown Page ###

User should fill  name, hour, minute and second areas dependent on their needs. hour, minute and seconds fields only accept integers. Otherwise, system will rise an error

<img width="1548" alt="Countdown screen" src="https://user-images.githubusercontent.com/23231263/117544276-5ddf6000-b029-11eb-910b-2f12c433d2d1.png">

Then User should click add countdown button, and countdown will start. If needed user can delete block by clicking delete button near to the block

<img width="1548" alt="Coundown started" src="https://user-images.githubusercontent.com/23231263/117544324-967f3980-b029-11eb-98df-26136f1f002c.png">

4. ### Chronometer Page ###

Users should fill the name of the chronometer to their needs. If the name is empty alert dialog will be shown to user which states that empty string is not allowed for chronometer name.

![image](https://user-images.githubusercontent.com/41952823/117576205-a95b4200-b0ed-11eb-85b9-b8915dbd704e.png)

After users create chronometers each chronometer can be stopped, reset and deleted. Each chronometer works asyncronously and functions can be used seperately.

![image](https://user-images.githubusercontent.com/41952823/117576249-de679480-b0ed-11eb-876f-b23460ca00a8.png)

!!! Will be edited. !!!




## Used Additional Libraries
!!!! Will be updated !!!

## Responsibilities
* Utku Özbudak : Developing login & signup page
* Onur Eker : Developing Countdown page and functionality
* Ozan Özbirecikli : Developing Chronometer page and functionality
* Batuhan Sesli : Developing main page and documentation

## Contributors
The project was made within the scope of Özyeğin University CS391 web development course with the contributions of the four people listed below.
* Utku Özbudak : Senior CS Student
* Onur Eker : : Senior CS Student
* Ozan Özbirecikli : Senior CS Student
* Batuhan Sesli : Senior EE Student & CS Minor
