# Handyman :construction_worker:

[![Build Status](https://travis-ci.com/yosefalnajjarofficial/handyman.svg?branch=master)](https://travis-ci.com/yosefalnajjarofficial/handyman)

![alt text](https://imgur.com/bHxmvrR.png)

## Table of Contents

[TOC]

## Problem :warning:

People were tired of asking the same questions when they need a handyman to help them achieving something. Each time people need electrician, mechanic, farmer, etc. they waste a lot of time searching and asking about quality, pricing, and other details. Sometimes they have bad service because of bad quality.

## Solution :bulb:

**Handyman** App allows users to get professional handyman with the required quality, price, and time. The app helps them be a member and choose what they need with the best qualifications.
Each handyman can have an account and show his qualifications and experiences.

## Design Sprint :art:

![alt text](https://i.imgur.com/TZfOwdW.png)

#### [Our Prototype](https://www.figma.com/proto/bE8eAbNWZAv7i0O78jKiHK/Untitled?node-id=382%3A4&scaling=scale-down)

## Installation Guide :wrench:

1. Clone this repo
2. Navigate to the cloned repo

### Database Setup

1. If you have pgcli skip this step.
   - Install PostgreSQL database
   - Along side with pgcli
   - [instructions on how to install pgcli](https://www.pgcli.com/install)
2. Open your terminal, run pgcli, navigate through the project to this path: `./server/db/config/createdb.sql`
3. Copy this file path and write in the terminal:

```
    \i <paste your copied path to the file>
```

4. That script created the databases required for the project!
5. Again, copy the path for this file `./server/db/config/build.sql`

```
    1. \c handyman
    2. \i <paste your copied path to the build file>
```

Optional Steps:

1.  copy the path for this file `./server/db/config/insertfakedata.sql`

```
   \i <paste your copied path to the fakedata file>
```

7. Close pgcli with `\q`.

### Project setup

1. Create a `.env` file in the project root folder.
2. Add the following in it **This step is so important!!**

```
SECRET=GFDS12S ## you can put any secret, but the tests will fail when using something else.
DEV_DB_URL=postgres://handyman:123@localhost:5432/handyman
TEST_DB_URL=postgres://handymantest:123@localhost:5432/handymantest
```

3. To install the dependecies, only for the first time:

```
 npm i && cd client && npm i --only the first time--
```

### Running the project:

1. To run the server, Open your terminal and run:

```
 npm run dev
```

2. To run the React Development server, Open another terminal and run:

```
 cd client
 npm run start
```

3. To run the tests:

```
npm test
```

## User Journey

#### **As an employer** :man:

The user should have an account and he can search for a specific service then he selects a handyman and chat with him then he can hire him and then he can fill the contract details and send it to the selected handyman and then he waits for the handyman to accept or decline the job and after the job id done the user can rate the handyman.

#### As an handyman :construction_worker:

The user should have an account and he can add his information and what he can provide and he can change his state as an unemployed or busy after the employers chat with him or hire him directly.

## User story

```gherkin
Feature: as an employer

  Scenario: the employer looking for a handyman.
    When the employer starts to browse the app.
    Then the employer search for a particular handyman.

  Scenario: the employer needs to hire a handyman.
    Given the employer must log in or create a new account
    When the employer looking for a specific handyman
    Then the employer starts to talk with the handyman that he intends to discuss the problem.
    Then the employer can hire the handyman or look for another handyman.
```

```gherkin

Feature: as an handyman
  As a Handyman,
  I want to display my skills in my profile
  To let others see what I can do and contact me.

  Scenario: the handyman sign in the app.
    Given the handyman has a particular skill
    When the handyman display his skill and what he can provide.
    And he can also put his state if he involved in a job or he is unemploy.
    And the employers can start to chat with him.
    And the employer can hire the handyman

```

## User Flows

![sequence](https://i.imgur.com/RSp6fbC.png)

## Technologies :computer:

- Front-End: **React JS**
- Back-End: **Node JS** & **Express JS**
- Styling: **CSS**
- Database: **Postgresql**

## Challenges Achieved :tada:

- [x] Finding a way for clients to find workers easily :100:
- [x] Gave people oportuinty to choose thier workers
- [x] Reduced the time and effort spent on finding workers :fire:
- [x] Made a simple and easy to understand system
- [x] Making a good user experience for our users to use the app
- [x] Developed a strong :muscle: backend and authentication system

## Still To Do :point_down:

- Our app for now supports **only one view which is the client's view**, we still need to develop the view from the workers side so they can accept offers or reject them
- The **chat service** isn't currently working so it needs to be done
- **The rating** also isn't working for now
- Refactoring the code in the best possible way ex. **writing less lines of code** to do the same thing
- Improving the UI so it looks better on all screen sizes **(making the web application responsive)**

## Contribution To The Project :sparkles:

To contribute our project, follow these instructions:

- Fork the repo on GitHub
- Clone the project to your own machine
- Commit changes to your own branch
- Push your work back up to your fork
- Submit a Pull request so that we can review your changes

:point_right: NOTE: Be sure to merge the latest from "upstream" before making a pull request!

## Resources :books:

https://reactjs.org/docs/getting-started.html
https://expressjs.com
https://www.npmjs.com/package/react-notifications
https://www.npmjs.com/package/jsonwebtoken
https://www.npmjs.com/package/bcrypt
https://github.com/axios/axios
