## MS-MealPlanner
===============

# IMPORTANT
## This is the frontend for [this node project](https://github.com/m00s/MS-MealPlanner-SERVER-)

### Features

- Manage (add/edit/remove) recipes
- Use a calendar to plan your meals
- Facebook / Twitter authentication

### Technologies
  * AngularJS
  * Express 4
  * MongoDB

### What's next
  - [Google Drive folder](https://drive.google.com/folderview?id=0ByM26BApEmg5RkloVUQwTEg5Z1k&usp=sharing)

## Setup
Clone the repo with:
```
$ git clone git@github.com:m00s/MS-MealPlanner.git
```
Make sure to have npm installed, then move to the project dir and resolve dependencies issuing:
```
$ npm install && bower install
```

### Start the app
Just issue a ```grunt serve``` from the root and wait for the process to open a new tab in your browser, with a server listening at ```http://127.0.0.1:9000```

### Building the release
First, bump the package.json version using a command like ```npm version patch```, then issue the default Grunt task with a plain ```grunt```

### Testing
#### Unit testing
The unit tests are written in Jasmine and launched through a Karma launcher, that uses the ```karma.conf.js``` config file.
You can run the issue ```grunt test```. Also, they are run when building the release.
To run unit test on multiple browser edit ```karma.conf.js```.
#### End to End
E2E tests are run using Protractor, a library that leverages WebDriverJs to run tests on angular. The config file is ```protractor.conf.js```
All the Unit test live in the ```e2e``` folder.

### Coding guidelines
Follow [John Papa's styleguide](https://github.com/johnpapa/angular-styleguide)

### Feedback
Use the [issue tracker](https://github.com/m00s/MS-MealPlanner/issues) for bugs. Mail or Tweet me for any idea that can improve the project.

### Authors
Project created and released by [m00s](mailto:massimilianosartoretto@gmail.com) ([Twitter](http://twitter.com/___Sarto))

### License
Released under The MIT License.
